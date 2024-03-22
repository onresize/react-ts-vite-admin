import React from 'react'
import './index.less'

const UploadBigFile = ({ themeStyle }: { themeStyle: any }) => {
  return (
    <div
      className="card uploadBigFile"
      style={{
        borderColor: themeStyle.borderColor,
        background: themeStyle.bgColor,
      }}
    ></div>
  )
}

export default UploadBigFile
