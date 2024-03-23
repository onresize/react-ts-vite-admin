import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'
import NProgress from '../config/nprogress'
import {
  showFullScreenLoading,
  tryHideFullScreenLoading,
} from '@/config/serviceLoading'
import { ResultData } from './interface'
import { checkStatus } from './helper/checkStatus'
import { AxiosCanceler } from './helper/axiosCancel'
import { TokenKey } from '@/config/config'
import { getToken } from '@/utils/authCookie'

const axiosCanceler = new AxiosCanceler()

const config = {
  baseURL: import.meta.env.VITE_API_URL as string,
  timeout: 20e3,
  withCredentials: false, // 是否跨域携带cookie凭证
}

class RequestHttp {
  service: AxiosInstance
  public constructor(config: any) {
    this.service = axios.create(config)

    // 请求拦截
    this.service.interceptors.request.use(
      (config: any) => {
        NProgress.start()
        config.headers!.noLoading || showFullScreenLoading()
        axiosCanceler.addPending(config) // 将请求添加到 Map中

        return {
          ...config,
          headers: { ...config.headers, [TokenKey]: getToken() },
        }
      },
      (err: AxiosError) => {
        return Promise.reject(err)
      }
    )

    // 响应拦截
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data, config } = response
        NProgress.done()
        axiosCanceler.removePending(config) // 请求结束后、移除本次请求
        tryHideFullScreenLoading()

        return data
      },
      (err: AxiosError) => {
        const { response } = err
        NProgress.done()
        tryHideFullScreenLoading()
        // 根据响应的错误状态码，做不同的处理
        if (response) checkStatus(response.status)
        // 断网处理
        if (!window.navigator.onLine) window.location.href = '/500'
        return Promise.reject(err)
      }
    )
  }

  // * 常用请求方法封装
  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object })
  }
  post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object)
  }
  put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.put(url, params, _object)
  }
  delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ..._object })
  }
}

export default new RequestHttp(config)
