import React, { memo, useState } from 'react'
import { StateButtonWrapper } from './style'
const StateButton = memo((props) => {
    const [isClose, setIsClose] = useState(true)
    const { onClick } = props
    const handleClick = () => {
      setIsClose(!isClose)
      onClick()
    }
  return (
    <StateButtonWrapper onClick={() => handleClick()}>
        <div className={isClose ? 'inner-box close' : 'inner-box open'}>
            <div className="left common">闭合</div>
            <div className="middle common"></div>
            <div className="right common">断开</div>
        </div>
    </StateButtonWrapper>
  )
})

export default StateButton