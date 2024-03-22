import React, { Suspense } from 'react'
import { Spin, theme } from 'antd'
import useStore from '@/mobx/index'
import { observer } from 'mobx-react-lite'
import { style } from '@/styles/cssinJs'

const WithAboutCom = observer(({ Comp }: { Comp: any }) => {
  const { header } = useStore()
  let themeStyle = header.themeType === 'light' ? style.light : style.dark
  return <Comp {...{ themeStyle }} />
})

// 路由懒加载组件
const LazyLoad = (Comp: any) => {
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
      <WithAboutCom {...{ Comp }} />
    </Suspense>
  )
}

export default LazyLoad
