import { Fragment } from 'react'
import { Breadcrumb } from 'antd'
import { useTranslation } from 'react-i18next'
import { HOME_URL } from '@/config/config'
import { observer } from 'mobx-react-lite'
import useStore from '@/mobx/index'
import { stringify } from 'querystring'

const style = {
  fontWeight: '600',
}

const BreadcrumbNav = observer((props: any) => {
  const { header } = useStore()
  const { t } = useTranslation()

  const breadcrumbList = header.breadcrumbArr || []
  const newItems: any[] = breadcrumbList.map((item: string) => {
    return { title: item !== t('header.home') ? item : null }
  })

  newItems.unshift({ title: t('header.home'), href: `${HOME_URL}` })
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
