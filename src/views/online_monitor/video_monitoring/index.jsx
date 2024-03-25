import React, { memo, useState } from 'react'
import { VideoMonitorWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeIndexAction } from '@/store/modules/video_monitor'
import FactorInfo from '@/components/factor-info'
const VideoMonitor = memo(() => {
    const dispatch = useDispatch()
    //控制右侧传感器下拉菜单的显示和隐藏
    const [isShow, setIsShow] = useState(true)
   
    //从rudux中获取数据 
    const { totalSensorList,
            videoIndex,
            noiseSensor, 
            airSensor, 
            hostSensor,
            environmentSensor,
            realTimeData
       } = useSelector((state) => ({
            totalSensorList: state.home.totalSensorList,
            videoIndex : state.videoMonitor.index,
            sensorParamsList: state.home.sensorParamsList,
            noiseSensor: state.historicData.noiseSensor,
            airSensor: state.historicData.airSensor,
            hostSensor: state.historicData.hostSensor,
            environmentSensor: state.historicData.environmentSensor,
            realTimeData: state.home.realTimeData,
    }), shallowEqual)
   const showList = isShow ? totalSensorList : [totalSensorList[0]]
    //右侧表单
   const changeVideoIndex = (index) => {
    dispatch(changeIndexAction(index))
   }
   //如果videoindex为0，合并四个传感器的数组
   const returnListByIndex = () => {
    if(videoIndex === 0) return [...noiseSensor.data.factors, ...airSensor.data.factors, ...hostSensor.data.factors, ...environmentSensor.data.factors]  
    if(videoIndex === 1) return noiseSensor.data.factors
    if(videoIndex === 2) return airSensor.data.factors
    if(videoIndex === 3) return hostSensor.data.factors
    if(videoIndex === 4) return environmentSensor.data.factors
  }

    //从实时数据对象中抽取相应的数据项
    const handleRealTimeData = (dataItem) => {
      const realTimeDataList = []
      if(videoIndex !== 0) {
        dataItem.forEach(item => {
        item.registerItem.forEach(item => {
          realTimeDataList.push(item)
        })
      })
      } else {
        realTimeData.data.forEach(item1 => {
          item1.dataItem.forEach(item2 => {
            item2.registerItem.forEach(item3 => {
              realTimeDataList.push(item3)
            })
          })
        })
      }
      return realTimeDataList
    }

  return (
    <VideoMonitorWrapper>
       <div className="content-left">
        <div className="video-left"></div>
        <div className="video-right">
          {
             returnListByIndex().map((item, index) => {
              return (
                <FactorInfo 
                key={item.factorId}
                param={item.factorName}
                unit={item.unit}
                value={handleRealTimeData(realTimeData.data[videoIndex - 1]?.dataItem)[index].data}
                index={index}
                size= {100}
                 />
              )
            })
          }
        </div>
        </div>
        <div className="content-right">
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
                            <div className={index === videoIndex ? 'active' : ''} onClick={() => changeVideoIndex(index, item)}>
                            <img src={require('@/assets/img/normal.png')} alt="" />
                            <span 
                            className='check'
                            style={index === 0 ? {display: 'none'} : {display: 'block'}}
                            >
                            </span>
                            {item}
                            </div>
                        </li>
                        )
                      })
                     
                    }  
                </ul>
            </div>
        </div>
    </VideoMonitorWrapper>
  )
})

export default VideoMonitor