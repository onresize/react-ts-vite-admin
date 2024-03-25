import React, { Suspense } from 'react'
import { Spin, theme } from 'antd'
import useStore from '@/mobx/index'
import { observer } from 'mobx-react-lite'
import { style } from '@/styles/theme/cssinJs'

const WithAboutCom = observer(({ Com }: { Com: any }) => {
  const { header } = useStore()
  let themeStyle = header.themeType === 'light' ? style.light : style.dark
  return <Com {...{ themeStyle }} />
})

// 路由懒加载组件
const LazyLoad = (Com: any, isCache: any = '') => {

  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        />
      }
    >
      <WithAboutCom {...{ Com }} />
    </Suspense>
  )
}

export default LazyLoad
