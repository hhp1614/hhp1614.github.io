/**
 * 页面类型
 */
declare type Pages = {
  /** 路径 */
  path: string
  /** 名称 */
  name: string
  /** 元数据 */
  meta: { title: string; desc: string }
  /** 组件 */
  component?: any
  /** 子路由 */
  children: Pages
}[]

/**
 * 分页类型
 */
declare type PaginateType<T> = {
  /** 当前页 */
  current_page: number
  /** 最后一页 */
  last_page: number
  /** 一页数据条数 */
  per_page: number
  /** 总数据条数 */
  total: number
  /** 数据 */
  data: T[]
}

/**
 * 分页类型
 */
declare type PageParams = {
  page: number
  size: number
}

/**
 * 扩展 window 对象
 */
interface Window {
  isLocal: boolean
}
