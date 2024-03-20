import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import NProgress from '../config/nprogress'
import { showFullScreenLoading, tryHideFullScreenLoading } from '@/config/serviceLoading'
import { ResultData } from "./interface";
import { checkStatus } from './helper/checkStatus'

const config = {
  baseURL: import.meta.env.VITE_API_URL as string,
  timeout: 10e3,
  withCredentials: true
}

class RequestHttp {
  service: AxiosInstance
  public constructor(config: any) {
    this.service = axios.create(config)

    // 请求拦截
    this.service.interceptors.request.use(
      (config: any) => {
        NProgress.start();
        config.headers!.noLoading || showFullScreenLoading()

        return { ...config }
      },
      (err: AxiosError) => {
        return Promise.reject(err)
      }
    )

    // 响应拦截
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data } = response
        NProgress.done()
        tryHideFullScreenLoading()

        return data
      },
      (err: AxiosError) => {
        const { response } = err
        NProgress.done()
        tryHideFullScreenLoading()
        // 根据响应的错误状态码，做不同的处理
        if (response) checkStatus(response.status);
        // 断网处理
        if (!window.navigator.onLine) window.location.href = '/500'
        return Promise.reject(err)
      }
    )
  }

  // * 常用请求方法封装
  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object });
  }
  post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object);
  }
  put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.put(url, params, _object);
  }
  delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ..._object });
  }
}

export default new RequestHttp(config)