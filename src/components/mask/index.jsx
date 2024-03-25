import React, { memo } from 'react'
import { MaskWrapper } from './style'
import { CloseOutlined } from '@ant-design/icons'
const Mask = memo((props) => {
    const { notice, text , leftText, rightText, handleRight, handleLeft, isShow} = props
    //右侧按钮点击
    const removeMask = () => {
        handleRight()
    }
    //左侧按钮点击
    const handleCertainClick = () => {
        handleLeft()
    }
  return (
    <MaskWrapper style={isShow ? {display: 'block'} : {display: 'none'}} >
         <div className="dialogue" onClick={(e) => e.stopPropagation()}>
          <div className="notice">
            {notice}
            <div className="close" onClick={() => handleRight()}>
              <CloseOutlined/>
            </div>
          </div>
          <div className="notice-text">
          {text}
          </div>
          <div className="button">
            <button className='f-btn' onClick={() => handleCertainClick()}>{leftText}</button>
            <button className='s-btn' onClick={() => removeMask()}>{rightText}</button>
          </div>
        </div>
    </MaskWrapper>
  )
})

export default Mask