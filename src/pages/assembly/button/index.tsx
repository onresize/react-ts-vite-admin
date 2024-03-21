import React from 'react'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import Wrapper from '@/components/Wrapper'

const styles = { margin: '6px' }
const style = { height: '100%' }

const ButtonSelf: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className="card" {...{ style }}>
      <Wrapper
        name={t('home.inset')}
        type="primary"
        Inset="true"
        styles={styles}
      ></Wrapper>
      <Wrapper
        name={t('home.shake')}
        type="primary"
        Shake="true"
        styles={styles}
      ></Wrapper>
      <Wrapper happyWave={t('home.waves')} styles={styles}></Wrapper>
    </div>
  )
}

export default ButtonSelf
