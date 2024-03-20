import { configure, makeAutoObservable, reaction } from 'mobx'
import { makePersistable, isHydrated } from "mobx-persist-store";

configure({
  enforceActions: "never"
})

class Header {

  isCollapse = true
  language = 'en'
  componentSize = 'middle'
  direction = 'ltr'

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
    makePersistable(this, {
      name: 'HeaderStore',
      properties: ["isCollapse", "language", "componentSize", "direction"],
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

}

const header = new Header()
export default header
