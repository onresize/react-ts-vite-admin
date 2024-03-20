import { configure, makeAutoObservable, reaction } from 'mobx'
import { makePersistable, isHydrated } from "mobx-persist-store";

configure({
  enforceActions: "never" // 默认是observed、只能在action函数中修改、设置never、可以在任何函数中进行修改
})

class Login {

  count = 0

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
    makePersistable(this, {
      name: 'LoginStore', // 保存的name，用于在storage中的名称标识，只要不和storage中其他名称重复就可以
      properties: ["count"], // 要保存的字段，这些字段会被保存在name对应的storage中，注意：不写在这里面的字段将不会被保存，刷新页面也将丢失：get字段例外。get数据会在数据返回后再自动计算
      storage: window.localStorage, // 保存的位置：看自己的业务情况选择，可以是localStorage，sessionStorage
    })
  }

  // 注意这个字段的使用：在页面useEffect的时候，如果你没有添加依赖数组（初始化执行），那么你可能拿不到computed计算的数据（原因是这时候还没有persist结束）
  // 这个属性还是比较重要的，因为它可以在页面上做判断，当页面load完成，get数据计算完成之后，isHydrated会置为true
  get isHydrated() {
    return isHydrated(this);
  }

  reset() {
    this.count = 0
  }

}

const login = new Login()

// 监听值的变化
reaction(() => login.count, (val, oldVal) => {
  console.log('数据变化：', val, oldVal)
})

export default login