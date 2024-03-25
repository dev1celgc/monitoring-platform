import React, { memo } from 'react'
import { NoticeWrapper } from './style'
const Notice = memo((props) => {
  const { isShow, text } = props
  return (
    <NoticeWrapper style={isShow ? {display: 'block'} : {display: 'none'}}>
       {text}
    </NoticeWrapper>
  )
})

export default Notice