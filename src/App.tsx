import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { observer } from 'mobx-react-lite'
import AuthRouter from './router/utils/authRouter'
import Router from './router'
import useStore from './mobx/index'
import { getBrowserLang } from './utils/utils'
import i18n from '@/language/index'
import zhCN from 'antd/locale/zh_CN'
import enUS from 'antd/locale/en_US'

const App: React.FC = observer(() => {
  const [count, setCount] = useState(0)
  const [i18nLocale, setI18nLocale] = useState(zhCN)
  const { header } = useStore()
  let { language, componentSize, direction } = header

  // 设置 antd 语言国际化
  const setAntdLanguage = (): void => {
    // 如果 redux 中有默认语言就设置成 redux 的默认语言，没有默认语言就设置成浏览器默认语言
    if (language && language == 'zh') return setI18nLocale(zhCN)
    if (language && language == 'en') return setI18nLocale(enUS)
    if (getBrowserLang() == 'zh') return setI18nLocale(zhCN)
    if (getBrowserLang() == 'en') return setI18nLocale(enUS)
  }

  useEffect(() => {
    // 全局使用国际化
    console.log('language:', language)
    i18n.changeLanguage(language || getBrowserLang())
    header.setLanguage(language || getBrowserLang()) // 存入mobx
    setAntdLanguage()
  }, [language])

  return (
    <BrowserRouter>
      <ConfigProvider
        direction={direction as any}
        locale={i18nLocale as any}
        componentSize={componentSize as any}
      >
        <AuthRouter>
          <Router />
        </AuthRouter>
      </ConfigProvider>
    </BrowserRouter>
  )
})

export default App
