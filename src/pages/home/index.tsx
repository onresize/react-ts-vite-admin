import React from 'react'
import './index.less'

const Home: React.FC = () => {
  return (
    <div className="home card">
      <img
        className="yun"
        draggable="false"
        src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*DR_FR7Q721sAAAAAAAAAAAAADmJ7AQ/original"
        alt="#"
      />
      <img
        className="antV"
        draggable="false"
        src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*ZJscTJdtQqgAAAAAAAAAAAAADmJ7AQ/original"
        alt="#"
      />
      <img
        className="worm"
        draggable="false"
        src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Qua4RZ6djCcAAAAAAAAAAAAADmJ7AQ/original"
        alt="#"
      />
    </div>
  )
}

export default Home
