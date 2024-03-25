import React, { memo, useEffect, useRef, useState } from 'react'
import { HomeFooterWrapper } from './style'
import FactorInfo from '@/components/factor-info'
import { CalendarOutlined, LineChartOutlined, MenuOutlined} from '@ant-design/icons'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeFactorExpandAction, changeIsLineChartAction } from '@/store/modules/home'
import LineChart from '@/components/line-charts'

//抽取处理折线图数据的方法
const handleLineChartData = (array) => {
  return array.map(item1 => {
    const valueList = []
    const timeList = []
    item1.data.forEach(item2 => {
     valueList.push(item2.data[0].value)
     timeList.push(item2.recordTimeStr)
    })
    return {
      option: {
        color: '#009688' ,
        xAxis: {
            type: 'category',
            data: timeList
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: valueList,
                type: 'line'
            }
        ]
    },
    name: item1.data[0].data[0].registerName 
    }
 })
}

const HomeFooter = memo(() => {
  const dispatch = useDispatch()
  //获取子元素的ref
  const factorRef = useRef(null)
  const { 
     currentIndex,
     noiseSensor, 
     airSensor, 
     hostSensor, 
     environmentSensor,
     realTimeData,
     factorExpand,
     noiseData,
     airData,
     hostData,
     environmentData,
     isLineChart
    } = useSelector((state) => ({
    currentIndex: state.home.currentIndex,
    noiseSensor: state.historicData.noiseSensor,
    airSensor: state.historicData.airSensor,
    hostSensor: state.historicData.hostSensor,
    environmentSensor: state.historicData.environmentSensor,
    realTimeData: state.home.realTimeData,
    factorExpand: state.home.factorExpand,
    noiseData: state.lineChartData.noiseData,
    airData: state.lineChartData.airData,
    hostData: state.lineChartData.hostData,
    environmentData: state.lineChartData.environmentData,
    isLineChart: state.home.isLineChart
  }), shallowEqual)

  //因子搜索信息消失的方法
  // const removeFactorSearch = (e) => {
  //   console.log(factorRef.current)
  //   // console.log(!factorRef.current.contains(e.target))
  //   // if(!factorRef.current.contains(e.target)) {
  //   //    dispatch(changeFactorIndexAction(-1))
  //   //  }
  // }`
  const returnListByIndex = () => {
    if(currentIndex === 1) return noiseSensor.data.factors
    if(currentIndex === 2) return airSensor.data.factors
    if(currentIndex === 3) return hostSensor.data.factors
    if(currentIndex === 4) return environmentSensor.data.factors
  }

  //返回折现图的数据
  const returnLineChartData = () => {
    if(currentIndex === 1) return handleLineChartData(noiseData)
    if(currentIndex === 2) return handleLineChartData(airData)
    if(currentIndex === 3) return handleLineChartData(hostData)
    if(currentIndex === 4) return handleLineChartData(environmentData)
  }
  // const [realTimeDataList, setRealTimeDataList] = useState()
  
  //从实时数据对象中抽取相应的数据项
  const handleRealTimeData = (dataItem) => {
    const realTimeDataList = []
    dataItem.forEach(item => {
      item.registerItem.forEach(item => {
        realTimeDataList.push(item)
      })
    })
    return realTimeDataList
  }


  return (
    <HomeFooterWrapper>
        <h4>
        因子信息
        <button className='btn' onClick={() => dispatch(changeFactorExpandAction(!factorExpand))}><CalendarOutlined /></button>
        <button className='btn' style={{marginRight: '3px'}} onClick={() => dispatch(changeIsLineChartAction(!isLineChart))}>{isLineChart ? <LineChartOutlined/> : <MenuOutlined/>}</button>
        </h4>
        {
          currentIndex===0 ? 
          <div className="zwsj">
            <img src={require('@/assets/img/zwsj1.png')} alt="" />
          </div> :
          <div className="factor-info-list">
            {
             isLineChart ? 
             returnLineChartData().map((item, index) => {
              return (
                <LineChart
                key={index}
                option={item.option}
                name={item.name}
                unit={returnListByIndex()[index].unit}
                />
              )
             })
             :
             returnListByIndex().map((item, index) => {
              return (
                <FactorInfo 
                key={index}
                param={item.factorName}
                unit={item.unit}
                value={handleRealTimeData(realTimeData.data[currentIndex - 1].dataItem)[index].data}
                index={index}
                ref={factorRef}
                size= {16.66}
                 />
              )
            })
            } 
            </div>
        }

        
    </HomeFooterWrapper>
  )
})

export default HomeFooter