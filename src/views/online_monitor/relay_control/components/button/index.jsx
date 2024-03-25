import React, { memo } from 'react'
import { MyButtonWrapper } from './style'

const MyButton = memo((props) => {
    const { bgColor, text='输入你的内容', icon, size, height, lineheight } = props
  return (
    <MyButtonWrapper bgcolor={bgColor} size={size} height={height} >
        <span>{icon}</span>
        <span className='text'>{text}</span>    
    </MyButtonWrapper>
  )
})

export default MyButton