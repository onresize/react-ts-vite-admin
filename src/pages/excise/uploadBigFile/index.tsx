import React, { useState } from 'react'
import './index.less'

const UploadBigFile = ({ themeStyle }: { themeStyle: any }) => {
  const [num, setNum] = useState(0)

  return (
    <div
      className="card uploadBigFile"
      style={{
        borderColor: themeStyle.borderColor,
        background: themeStyle.bgColor,
      }}
    >
      {num}
      <button
        onClick={() => {
          setNum(num + 1)
        }}
      >
        +1
      </button>
    </div>
  )
}

export default UploadBigFile
