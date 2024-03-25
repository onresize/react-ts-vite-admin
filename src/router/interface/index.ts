export interface RouteObject {
  caseSensitive?: boolean
  children?: RouteObject[]
  element?: React.ReactNode
  index?: boolean
  path?: string
  isCache?: boolean
  meta?: MetaProps
  isLink?: string
  title: string
  key?: string
}
