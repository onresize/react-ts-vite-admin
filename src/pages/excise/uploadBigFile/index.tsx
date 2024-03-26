import React, { useState, useContext } from 'react'
import { Input } from 'antd'
// @ts-ignore
import KeepAlive from '@/components/keepalive/index'
import { ThemeContext } from '@/styles/theme/cssinJs'
import './index.less'

const UploadBigFile = (_props: any) => {
  const themeStyle: any = useContext(ThemeContext)

  return (
    <KeepAlive>
      <div
        className="card uploadBigFile"
        style={{
          borderColor: themeStyle.borderColor,
          background: themeStyle.bgColor,
        }}
      >
        <Input placeholder="KeepAlive缓存真实DOM" />
      </div>
    </KeepAlive>
  )
}

export default UploadBigFile
