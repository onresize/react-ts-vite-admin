// 设置展开的 subMenu
export const getOpenKeys = (path: string) => {
  let str: string = ''
  let newArr: any[] = []
  let arr = path.split('/').map((v) => '/' + v)
  for (let i = 1; i < arr.length - 1; i++) {
    str += arr[i]
    newArr.push(str)
  }
  return newArr
}