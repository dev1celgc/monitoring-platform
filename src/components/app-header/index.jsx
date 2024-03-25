import React, { memo, useState } from 'react'
import { HeaderWrapper } from './style'
import { GlobalOutlined, BellOutlined, BgColorsOutlined } from '@ant-design/icons'
import Mask from '../mask'
import { useNavigate } from 'react-router-dom'

const AppHeader = memo(() => {
  //告警风格数组
  const [styleList, setStyleList] = useState(['关闭','简约','醒目'])
  //告警当前风格 
  const [style, setStyle] = useState('告警关闭')
  //控制告警风格下拉框选中
  const [styleSelected, setStyleSelected] = useState()
  //平台当前颜色
  const [currentColor, setCurrentColor] = useState('科技蓝')
  //控制平台当前颜色数组
  const [colorList, setColorList] = useState([
    {
      name: '科技蓝',
      color: '#1588C7'
    },
    {
      name: '健康绿',
      color: '#47A96C'
    },
    {
      name: '炫酷黑',
      color: '#242730'
    },
    {
      name: '个性橘',
      color: '#f0342b'
    },
  ])
  //更改个人信息的数组
  const [infoList, setInfoList] = useState(['资料修改','绑定微信'])
  //控制个人信息选中的变量
  const [infocha, setInfocha] = useState()
  //控制左侧导航选中的变量
  const [leftSelected, setLeftSelected] = useState(0)
  //控制右侧导航选中的变量
  const [rightSelected, setRightSelected] = useState(0)
  //改变告警风格的方法
  const changeAlertStyle = (index) =>  {
    setStyleSelected(index)
   if(index === 0) {
    setStyle('告警关闭')
   } else if(index === 1) {
    setStyle('简约告警')
   } else if(index === 2) {
    setStyle('醒目告警')
   }
  }
  const navigate = useNavigate()
  //选中绑定微信或者修改信息的方法
  const changePersonInfo = (index) => {
    setInfocha(index)
  }

  const handleLogout = () => {
    setRightSelected(4)
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <HeaderWrapper>
      <Mask/>
      <div className="header-left">
      <div className="logo">
        <img src={require('../../assets/img/logo.png')} alt="" />
          <span>综合环境监控云平台</span>
        </div>
        <ul className='home-see'>
          <li className={leftSelected === 0 ? 'active' : ''} onClick={e => setLeftSelected(0)}><a href="">首页</a></li>
          <li className={leftSelected === 1 ? 'active' : ''} onClick={e => setLeftSelected(1)}><a href="">大屏可视化</a></li>
        </ul>
      </div>
      <div className="header-right">
        <ul className="right-nav">
          <li className={rightSelected === 0 ? 'first-item active' : 'first-item'} onClick={e => setRightSelected(0)} >
          <BgColorsOutlined style={{fontSize: '18px'}}/>
          <ul className='color-list'>
            {
              colorList.map((item, index) => {
                return (
                  <li key={index}>
                    <span className='color' style={{backgroundColor: `${item.color}`}}></span>
                    {item.name}
                  </li>
                )
              })
            }
          </ul>
          </li>
          <li className={rightSelected === 1 ? 'second-item active' : 'second-item'} onClick={e => setRightSelected(1)}  >
            <GlobalOutlined className='global-outlined'/>
            <span className='alert-close'>{ style }</span>
            <ul className="alert-list">
              {
                styleList.map((item, index) => {
                  return (
                    <li key={index} onClick={e => changeAlertStyle(index)} className={styleSelected === index ? 'alert-item-active' : ''}>
                      {item}
                    </li>
                  )
                })
              }
            </ul>
            <div className='tag-area'>
              <div className="top-tag tag"></div>
              <div className="bottom-tag tag"></div>
            </div>
          </li>
          <li className={rightSelected === 2 ? 'third-item active' : 'third-item'} onClick={e => setRightSelected(2)} >
          <BellOutlined className='bell-outlined'/>
          </li>
          <li className={rightSelected === 3 ? 'fourth-item active' : 'fourth-item'} onClick={e => setRightSelected(3)} >
            <span>北京延庆南菜园项目</span>
            <ul className='person-content'>
              {
                infoList.map((item, index) => {
                  return (
                    <li key={item} onClick={e => changePersonInfo(index)} className={infocha === index ? 'person-item-active' : ''}>
                      {item}
                    </li>
                  )
                })
              }
            </ul>
            <div className='tag-area'>
              <div className="top-tag tag"></div>
              <div className="bottom-tag tag"></div>
            </div>
          </li>
          <li className={rightSelected === 4 ? 'fifth-item active' : 'fifth-item'} onClick={e => handleLogout()}>
            <span>退出</span>
          </li>
        </ul>
      </div>
    </HeaderWrapper>
  )
})

export default AppHeader
