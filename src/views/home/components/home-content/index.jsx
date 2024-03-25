import React, { Fragment, memo, useEffect, useState } from 'react'
import { HomeContentWrapper, LeftContentWrapper, MiddleContentWrapper, RightContentWrapper } from './style'
import { CalendarOutlined, SettingOutlined, GroupOutlined, } from '@ant-design/icons'
import createMap from '@/utils/createMap'
import { shallowEqual, useDispatch, useSelector    } from 'react-redux'
import { changeCurrentIndexAction, changeMapExpandAction, changeMenuIsShowAction } from '@/store/modules/home'
import { Button } from 'antd'
const HomeContent = memo(() => {
  //获取百度地图的API
  //调用创建地图的函数
  useEffect(() => {
    createMap('baidu-map')
   },[])

   //从redux中获得数据
   const { currentIndex,  equipInfoList, totalSensorList, mapExpand, menuIsShow } = useSelector((state) => ({
    currentIndex: state.home.currentIndex,
    equipInfoList: state.home. equipInfoList,
    totalSensorList: state.home.totalSensorList,
    mapExpand: state.home.mapExpand,
    menuIsShow: state.home.menuIsShow
   }), shallowEqual)

   //修改redux中currentIndex的值
   const dispatch = useDispatch()
   const changeCurrentIndex = (index) => {
    dispatch(changeCurrentIndexAction(index))
   }
    //控制列表的显示和隐藏 
    const [isShow, setIsShow] = useState(true)

    //渲染数组
    const showList = isShow ? totalSensorList : [totalSensorList[0]]

    //百度地图的放大和缩小
    const handleBtnClick = () => {
      dispatch(changeMapExpandAction(!mapExpand))
    }
    const handleMenuClick = (e) => {
      e.stopPropagation()
      dispatch(changeMenuIsShowAction(!menuIsShow))
    }
    //右侧表单渲染函数
    const rightListRender = () => {
      if(currentIndex === 0) {
        return(
          <Fragment>
              <h4>区域信息</h4>
              <div className="right-list">
           <ul>
          {
             equipInfoList[currentIndex].infoList.map((item, index) => {
              return (
                <li key={item.itemName}>
                <span className="item-name">{item.itemName}:</span>
                <span className='item-text'>{item.itemText}</span>
                <Button type='primary'>{index ? '充值':'充值记录'}</Button>
              </li>
              )
            })
          }
        </ul>
        </div>
          </Fragment>
        )
      } else {
        return (
          <Fragment>
        <h4>
        设备信息
        <button className='btn' ><GroupOutlined /></button>
        <button className='btn' style={{marginRight: '3px'}} onClick={(e) => handleMenuClick(e)}><SettingOutlined /></button>
        </h4>
        <div className="right-list">
        <div className="relay-operation" style={menuIsShow ? {display: 'block'} : {display: 'none'}} >
            <div className="operation-item" style={{marginTop: '0px'}}>继电器操作</div>
            <div className="operation-item">继电器操作记录</div>
            <div className="operation-item">设备维护</div>
            <div className="operation-item">数据透传</div>
          </div>
        <ul>
          {
             equipInfoList[currentIndex].infoList.map(item => {
              return (
                <li key={item.itemName}>
                <span className="item-name">{item.itemName}:</span>
                <span className='item-text'>{item.itemText}</span>
              </li>
              )
            })
          }
        </ul>
        <p>摄像头信息</p>
        <div className='video-info'>暂无摄像头信息</div>
        </div>
          </Fragment>
        )
      }
    }
  return (
    <HomeContentWrapper style={mapExpand ? {height: '770px'} : {height: '380px'}}>
        <LeftContentWrapper style={mapExpand ? {display: 'none'} : {display: 'block'}}>
            <h4>设备列表</h4>
            <div className="left-list">  
                <ul className='item'>
                    {
                      showList.map((item,index) => {
                        return (
                        <li key={item}>
                            <span 
                            className={isShow ? 'f-icon' : 'f-icon f-icon-active'} 
                            onClick={() => setIsShow(!isShow)} 
                            style={index === 0 ? {display: 'block'} : {display: 'none'}}
                            ></span>
                            <span className='icon'></span>
                            <div className={index === currentIndex ? 'active' : ''} onClick={() => changeCurrentIndex(index)}>
                            <img src={require('@/assets/img/normal.png')} alt="" />
                            <i className=''></i>
                            {item}
                            </div>
                        </li>
                        )
                      })
                     
                    }  
                </ul>
            </div>
        </LeftContentWrapper>
        <MiddleContentWrapper style={mapExpand ? {width: '100%', margin: '0'} : {}}>
        <h4>
        地图信息
        <button className='btn' onClick={() => handleBtnClick()}><CalendarOutlined /></button>
        </h4>
        <div id='baidu-map'>
        </div>
        </MiddleContentWrapper>
        <RightContentWrapper style={mapExpand ? {display: 'none'} : {display: 'block'}}>
          {
            rightListRender()
          }
        </RightContentWrapper>
    </HomeContentWrapper>
  )
})

export default HomeContent