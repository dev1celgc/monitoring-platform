import React, { forwardRef, memo, useEffect, useState } from 'react'
import { EquipParamWrapper } from './style'
import { useDispatch } from 'react-redux'
import { changeCurrentIndexAction } from '@/store/modules/home'


const EquipParam = memo(forwardRef((props, ref) => {
  const dispatch = useDispatch()
  const { item, sensorList, isShow, index, changeIsShow } = props 
  //控制下拉菜单的高亮
  const [highlight, setHighlight] = useState(-1)
  const [filterArray, setFilterArray] = useState([...sensorList])
  //input的值
  const [value, setValue] = useState('设备搜索')
  //获取input改变后的值
  const getInputValue = (e) => {
    setValue(e.target.value)
    const filterList = sensorList.filter(item => item.sensor.includes(e.target.value) || item.letter.includes(e.target.value))
    setFilterArray(filterList)
  }
  //聚焦时清空内容
  const clearInputValue = () => {
    setValue('')
  }
  const handleClick = (index) => {
    setHighlight(index)
    dispatch(changeCurrentIndexAction(index + 1))
  }
  //判断设备渲染数组是否为空，返回不同的下拉菜单
  const filterListIsNull = () => {
    if(filterArray.length === 0) {
      return (
        <div className='no-equip'>无相关此设备</div>
      )
    } else {
      return (
        filterArray.map((item, index) => {
          return (
        <div 
         className={highlight === index ? 'list list-active' : 'list'} 
         key={item.address}
         style={index%2 === 0 ? {backgroundColor: '#d6e0ef'} : {}}
         onClick={() => handleClick(index)}
         >
             <span>{item.sensor}</span>
             <span>{item.address}</span> 
        </div>
          )
        })
      )
    }
  }
  //组件显示和隐藏时修改当前高亮 
  useEffect(() => {
    setHighlight(-1)
  },[isShow])
  return (
    <EquipParamWrapper ref={ref}>
        <div className="inner-text" style={{backgroundColor: `${item.color}`}} onClick={e => changeIsShow(index)}>
        <h3>{item.text}</h3>
        <span className='number'>{item.number}</span>
        <div className="icon">
            {item.icon}
        </div>
        <div className={isShow ? 'home-list' : 'home-list home-list-active'} >
          <div style={isShow ? {display: 'block'} : {display: 'none'}} >
          <div className='name'>
            <span>{item.text + '列表'}</span>
            <input className='search' type="text" value={value} autoComplete='off' onChange={e => getInputValue(e)} onFocus={e => clearInputValue()} />
          </div>
          <div className="title">
            <span>设备名称</span>
            <span>设备地址</span>
          </div>
          {
           filterListIsNull()
          }
          </div>
          </div>
        </div>
    </EquipParamWrapper>
  )
}))

export default EquipParam
