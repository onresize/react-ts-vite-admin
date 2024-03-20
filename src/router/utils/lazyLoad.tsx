import React, { Suspense } from 'react'
import { Spin } from 'antd'

// 路由懒加载组件
const LazyLoad = (Comp: React.FC): React.ReactNode => {
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
      <Comp />
    </Suspense>
  )
}

export default LazyLoad
