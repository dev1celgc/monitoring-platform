import React, { memo, useEffect, useRef, useState } from 'react'
import { HomeWrapper } from './style'
import EquipParam from './components/equip-param'
import HomeContent from './components/home-content'
import {SettingOutlined,EyeOutlined, BellOutlined,ApiOutlined} from '@ant-design/icons'
import HomeFooter from './components/home-footer'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeFactorIndexAction, changeIsShowFalseAction, changeMenuIsShowAction } from '@/store/modules/home'


const Home = memo(() => {
  const dispatch = useDispatch()
  //子组件的ref
  const childRef = useRef(null)
  //获取设备状态的对象
  const { deviceStatus, mapExpand, factorExpand } = useSelector((state) => ({
    deviceStatus: state.home.deviceStatus,
    mapExpand: state.home.mapExpand,
    factorExpand: state.home.factorExpand
  }), shallowEqual)
  //设备状况分类数组
  const [equipList, setEquipList] = useState([
    {
      text: '设备总数',
      color: '#1588C7',
      number: deviceStatus?.data.total,
      icon: <SettingOutlined/>
    },
    {
      text: '在线设备',
      color: '#47A96C',
      number: deviceStatus?.data.online,
      icon: <EyeOutlined/>
    },
    {
      text: '报警设备',
      color: '#f0342b',
      number: deviceStatus?.data.alarming,
      icon: <BellOutlined/>
    },
    {
      text: '离线设备',
      color: '#242730',
      number: deviceStatus?.data.offline,
      icon: <ApiOutlined/>
    },
  ])

  //设备详细情况
  const [equipInfoList, setEquipInfoList] = useState([
    [
      {
        sensor: '室外噪声传感器',
        address: '21068083',
        letter: 'shiwaizaoshengchuanganqi'
      },
      {
        sensor: '室内空气质量监测仪',
        address: '21072372',
        letter: 'shineikongqizhiliangjianceyi'
      },
      {
        sensor: '智能监控主机',
        address: '40274120',
        letter: 'zhinengjiankongzhuji'
      },
      {
        sensor: '室外气象环境监测站',
        address: '40287568',
        letter: 'shiwaiqixianghuanjingjiancezhan'
      },
    ],
    [
      {
        sensor: '室外噪声传感器',
        address: '21068083',
        letter: 'shiwaizaoshengchuanganqi'
      },
      {
        sensor: '室内空气质量监测仪',
        address: '21072372',
        letter: 'shineikongqizhiliangjianceyi'
      },
      {
        sensor: '智能监控主机',
        address: '40274120',
        letter: 'zhinengjiankongzhuji'
      },
      {
        sensor: '室外气象环境监测站',
        address: '40287568',
        letter: 'shiwaiqixianghuanjingjiancezhan'
      },
    ],
    [],
    []
  ])

  //控制下拉菜单显示和隐藏
  const [equipListShow, setEquipListShow] = useState(-1)

  //控制不同下拉菜单出现的逻辑
  const changeIsShow = (index) => {
    setEquipListShow(index)
  }

  //点击下拉菜单外，下拉菜单消失
  //在home页上添加点击事件，获取header的ref
  const listDisappear = (e) => {
    if(!childRef.current.contains(e.target)) {
      setEquipListShow(-1)
    }
    dispatch(changeFactorIndexAction(-1))
    dispatch(changeIsShowFalseAction())
    dispatch(changeMenuIsShowAction(false))
  }

  //home页滚轮事件
 const handleWheel = () => {
  dispatch(changeIsShowFalseAction())
 }

  return (
    <HomeWrapper  onClick={e => listDisappear(e)}  onWheel={() => handleWheel()}>
      <div className="home-header" ref={childRef}>
        {
          equipList.map((item,index) => {
            return (
              <EquipParam item={item} sensorList={equipInfoList[index]} isShow={index===equipListShow} index={index} changeIsShow={(currentIndex) => changeIsShow(currentIndex)} />
            )
          })
        } 
      </div>
      <div className="home-content" style={factorExpand ? {display: 'none'} : {display: 'block'}}>
        <HomeContent/>
      </div>
      <div className={factorExpand ? 'home-info home-info-active' : 'home-info'} style={mapExpand ? {display: 'none'} : {display: 'block'}} >
        <HomeFooter></HomeFooter>
      </div>
    </HomeWrapper>
  )
})

export default Home
