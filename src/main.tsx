import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/styles/reset.less'
import '@/assets/iconfont/iconfont.less'
import '@/assets/fonts-input/font.less'
import '@/styles/common.less'
import ReactApp from './App'

// console.log('env环境:\n', import.meta.env)

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <ReactApp />
  // </React.StrictMode>
)
