import { Fragment } from 'react'
import { Breadcrumb } from 'antd'
import { HOME_URL } from '@/config/config'
import { observer } from 'mobx-react-lite'
import useStore from '@/mobx/index'
import { stringify } from 'querystring'

const style = {
  fontWeight: '600',
}

const BreadcrumbNav = observer((props: any) => {
  const { header } = useStore()

  const breadcrumbList = header.breadcrumbArr || []
  const newItems: any[] = breadcrumbList.map((item: string) => {
    return { title: item !== '首页' ? item : null }
  })

  newItems.unshift({ title: '首页', href: `${HOME_URL}` })
  console.log('newItems:', newItems)

  return (
    <Fragment>
      {header.breadcrumb && (
        <Breadcrumb items={newItems} {...{ style }}></Breadcrumb>
      )}
    </Fragment>
  )
})

export default BreadcrumbNav
