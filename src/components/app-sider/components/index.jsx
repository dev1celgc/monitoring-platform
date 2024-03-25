import React, { memo, useState } from 'react'
import { SideCpnWrapper } from './style'
import { useNavigate } from 'react-router-dom'

const SideCpn = memo((props) => {
    const navigate = useNavigate()
    const { iteminfo, index, control,changeControl } = props
    //控制一级标题的展开
    const [isShow, setIsShow] = useState(false)
    const changeStyle = (index) => {
        setIsShow(!isShow)
        if(!iteminfo.subName.length) {
            changeControl(index)
            navigate(iteminfo.router)
        }
    }
  return (
    <SideCpnWrapper>
       <div className={index === control && !iteminfo.subName.length ? 'main-title active' : 'main-title'} onClick={e => changeStyle(index)} >
                <span className="icon">
                    {props.children[0]}
                </span>
                <span>{iteminfo.name}</span>
                <div className="tag-area" style={iteminfo.subName.length ? {display: 'block'} : {display: 'none'} }>
                    <div className={isShow ? 'top-tag tag top-tag-active' : 'top-tag tag'}></div>
                    <div className={isShow ? 'bottom-tag tag bottom-tag-active' : 'bottom-tag tag'}></div>
                </div>
            </div>
            <ul className='sub-title' style={isShow ? {display: 'block'} : {display: 'none'}}>
               {
                props.children.filter((item, index) => index > 0)
               }
            </ul>
    </SideCpnWrapper>
  )
})

export default SideCpn