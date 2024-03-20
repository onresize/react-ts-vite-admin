import { configure, makeAutoObservable, reaction } from 'mobx'
import { makePersistable, isHydrated } from "mobx-persist-store";

configure({
  enforceActions: "never"
})

class Header {

  isCollapse = true
  language = 'zh'

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
    makePersistable(this, {
      name: 'HeaderStore',
      properties: ["isCollapse"],
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

}

const header = new Header()
export default header