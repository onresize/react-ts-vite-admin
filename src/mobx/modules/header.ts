import { configure, makeAutoObservable, reaction } from 'mobx'
import { makePersistable, isHydrated } from "mobx-persist-store";

configure({
  enforceActions: "never"
})

type themeConfig = 'light' | 'dark'

class Header {

  isCollapse = false // false：展开
  language = 'en' // 国际化
  componentSize = 'middle' // 组件大小
  direction = 'ltr' // 字体方向
  footer = true // 页脚
  breadcrumb = true // 面包屑状态
  breadcrumbArr = [] // 面包屑集合
  themeType: themeConfig = 'dark' // 主题类型

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
    makePersistable(this, {
      name: 'HeaderStore',
      properties: ["isCollapse", "language", "componentSize", "direction", "footer", "breadcrumb", "breadcrumbArr", "themeType"],
      storage: window.localStorage,
    })
  }

  get isHydrated() {
    return isHydrated(this);
  }

  updateCollapse(bool: boolean) {
    this.isCollapse = bool
  }

  setLanguage(str: string) {
    this.language = str
  }

  setComponentSize(str: string) {
    this.componentSize = str
  }

  setDirection(str: string) {
    this.direction = str
  }

  setFooter(bool: boolean) {
    this.footer = bool
  }

  setBreadcrumb(bool: boolean) {
    this.breadcrumb = bool
  }

  setBreadcrumbArr(arr: any) {
    this.breadcrumbArr = arr
  }

  setThemeType(type: themeConfig) {
    this.themeType = type
  }

}

const header = new Header()
export default header
