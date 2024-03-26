import React, { useContext } from 'react'
import { Button } from 'antd'
import { useIntl } from 'react-intl'
import Wrapper from '@/components/Wrapper'
import { ThemeContext } from '@/styles/theme/cssinJs'

const styles = { margin: '6px' }

const ButtonSelf = (_props: any) => {
  const { formatMessage: t } = useIntl()
  const themeStyle: any = useContext(ThemeContext)

  return (
    <div
      className="card"
      style={{
        borderColor: themeStyle.borderColor,
        background: themeStyle.bgColor,
        height: '100%',
      }}
    >
      <Wrapper
        name={t({ id: 'home.inset' })}
        type="primary"
        Inset="true"
        styles={styles}
      ></Wrapper>
      <Wrapper
        name={t({ id: 'home.shake' })}
        type="primary"
        Shake="true"
        styles={styles}
      ></Wrapper>
      <Wrapper happyWave={t({ id: 'home.waves' })} styles={styles}></Wrapper>
    </div>
  )
}

export default ButtonSelf
