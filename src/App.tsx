import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AuthRouter from './router/utils/authRouter'
import Router from './router'
// import darkTheme from '@/styles/theme/theme-dark.less'
// import defaultTheme from '@/styles/theme/theme-default.less'

const initTheme = () => {
  // 切换暗黑模式
  const head = document.getElementsByTagName('head')[0]
  const getStyle = head.getElementsByTagName('style')
  if (getStyle.length > 0) {
    for (let i = 0, l = getStyle.length; i < l; i++) {
      if (getStyle[i]?.getAttribute('data-type') === 'dark')
        getStyle[i].remove()
    }
  }

  const styleDom = document.createElement('style')
  styleDom.dataset.type = 'dark'
  // styleDom.innerHTML ? darkTheme : defaultTheme
  head.appendChild(styleDom)
}
initTheme()

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <AuthRouter>
        <Router />
      </AuthRouter>
    </BrowserRouter>
  )
}

export default App
