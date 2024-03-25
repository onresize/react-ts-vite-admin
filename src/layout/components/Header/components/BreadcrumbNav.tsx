import { Fragment } from 'react'
import { Breadcrumb } from 'antd'
import { useIntl } from 'react-intl'
import { HOME_URL } from '@/config/config'
import { observer } from 'mobx-react-lite'
import useStore from '@/mobx/index'
import { stringify } from 'querystring'

const style = {
  fontWeight: '600',
}

const BreadcrumbNav = observer((props: any) => {
  const { header } = useStore()
  const { formatMessage: t } = useIntl()

  const breadcrumbList = header.breadcrumbArr || []
  const newItems: any[] = breadcrumbList.map((item: string) => {
    return { title: item !== t({ id: 'header.home' }) ? t({ id: item }) : null }
  })

  newItems.unshift({ title: t({ id: 'header.home' }), href: `${HOME_URL}` })
  // console.log('newItems:', newItems)

  return (
    <Fragment>
      {header.breadcrumb && (
        <Breadcrumb items={newItems} {...{ style }}></Breadcrumb>
      )}
    </Fragment>
  )
})

export default BreadcrumbNav
