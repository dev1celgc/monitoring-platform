import React, { memo, useRef, useState } from 'react'
import { TimeDataWrapper } from './style'
import SensorFrame from './components/sensor-frame'
import { useDispatch, useSelector } from 'react-redux'
import { changeDataIndexAction } from '@/store/modules/realtime_data'
import { BorderOutlined, CheckSquareOutlined } from '@ant-design/icons'
import { changeIsShowFalseAction } from '@/store/modules/home'
import Mask from '@/components/mask'
import Notice from '@/components/notice'

const TimeData = memo(() => {
  //输入框的值
  const [value, setValue] = useState('')
  //控制边框颜色的数组
  const [border, setBorder] = useState([
    false,
    false,
    false,  
    false
  ])
  //防抖函数
  const timer = useRef()
  //弹窗的显示和隐藏
  const [diaShow, setDiaShow] = useState(false)
  //提示框的显示和隐藏
  const [noticeShow, setNoticeShow] = useState(false)
  //左侧数组
  const [leftShowList, setLeftShowList] = useState([])
  const dispatch = useDispatch()
  //控制右侧传感器下拉菜单的显示和隐藏
  const [isShow, setIsShow] = useState(true)
   //是否展开的数组
   const [showArr, setShowArr] = useState([
     true,
     true,
     true,
     true
   ])

   const [tickList, setTickList] = useState([
    false,
    false,
    false,  
    false
   ])
  //从redux获取传感器列表数组
  const { totalSensorList, dataIndex, sensorParamsList } = useSelector((state) => ({
    totalSensorList: state.home.totalSensorList,
    dataIndex: state.timeData.dataIndex,
    sensorParamsList: state.home.sensorParamsList
  }))
   //渲染数组
   const showList = isShow ? totalSensorList : [totalSensorList[0]]
   //改变当前索引值
    const changeDataIndex = (index, name) => {
      //改变菜单当前高亮
      dispatch(changeDataIndexAction(index))

      //改变勾选的个数
      const newTickList = [...tickList]
      newTickList[index - 1] = !newTickList[index - 1]
      setTickList(newTickList)

      //如果勾选增加渲染数组
      if(newTickList[index - 1]) {
        const newLeftShowList = leftShowList
        newLeftShowList.push(sensorParamsList[index])
        setLeftShowList([...newLeftShowList])

        //折叠数组展开
        const newShowArr = [...showArr]
        newShowArr[newLeftShowList.length - 1] = true
        setShowArr([...newShowArr])
      }

      //如果取消勾选删除数组
      if(!newTickList[index - 1]) {
        const newLeftShowList = [...leftShowList]
        const newArray = newLeftShowList.filter(item => item.name !== name)
        setLeftShowList([...newArray]) 
      }
    }
    //滚轮事件
    const handleWheel = () => {
      dispatch(changeIsShowFalseAction())
    }

    //整个页面点击事件
    const handleClick = () => {
      dispatch(changeIsShowFalseAction())
      setDiaShow(false)
      setNoticeShow(false)
    }
   

    //全部折叠的方法
    const handleCollapeClick = (e) => {
      e.stopPropagation()
      if(!leftShowList.length) {
        setNoticeShow(true)
        if(timer.current) {
          clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
          setNoticeShow(false)
          timer.current = null
        }, 1500)
      } else {
        setShowArr([false, false, false, false])
      }
     
    }
    //子组件自己折叠和展开
    const changeShow = (param) => {
      const selfShowList = [...showArr]
      selfShowList[param] = !selfShowList[param]
      setShowArr(selfShowList)
    }
    //全部展开的方法
    const handleLaunchClick = (e) => {
      e.stopPropagation()
      if(leftShowList.length === 0) {
        setNoticeShow(true)
        if(timer.current) {
          clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
          setNoticeShow(false)
          timer.current = null
        }, 1500)
      } else {
        setShowArr([true, true, true, true])
      }
    }
    //消除蒙层
    const handleRight = () => {
      setDiaShow(false)
    }

    //清空全部的方法
    const handleClearClick = (e) => {
      e.stopPropagation()
      setDiaShow(true)
    }

    //给提示框加上定时器
    

    const handleLeft = () => {
      setDiaShow(false)
      setLeftShowList([])
      setTickList([false, false, false, false])
    }
    //查看全部的方法
    const handleWatchClick = () => {
      setLeftShowList([...sensorParamsList.filter((item, index) => index > 0)])
      setTickList([true, true, true, true])
    }

    //输入框的改变事件
    const handleChange = (e) => {
      setValue(e.target.value)
    }

    const handleSearch = () => {
      setBorder([false, false, false, false])
      const newBorder = [...border]
      leftShowList.forEach((item,index) => {
        if(item.name.includes(value)) {
          newBorder[index] = true
        }
      })
      setBorder(newBorder)
    }

    //处理删除事件
    const handleCloseEvent = (ind) => {
         //改变勾选的个数
         const newTickList = [...tickList]
         newTickList[ind] = !newTickList[ind]
         setTickList(newTickList)
         //删除数组元素
         const newLeftShowList = [...leftShowList]
        const newArray = newLeftShowList.filter((item, index) => index !== ind)
        setLeftShowList([...newArray]) 

    }

  return (
    <TimeDataWrapper onWheel={() => handleWheel()} onClick={() => handleClick()}>
      <Notice
      isShow={noticeShow}
      text='未勾选设备'
      />
      <Mask
      notice='您确定要清空吗？'
      text='如果继续，将清空该设备列表，清空后需要重新勾选设备，请谨慎操作!'
      leftText='确定'
      rightText='取消'
      handleRight={() => handleRight()}
      handleLeft={() => handleLeft()}
      isShow={diaShow}
      />
      <div className="content-left">
        <div className="content-operate">
          <button className="all-collape" onClick={(e) => handleCollapeClick(e)}>全部折叠</button>
          <button className="all-launch" onClick={(e) => handleLaunchClick(e)}>全部展开</button>
          <button className='all-clear' onClick={(e) => handleClearClick(e)}>清空全部</button>
          <button className='all-watch' onClick={() => handleWatchClick()}>查看全部</button>
          <input 
            type="text" 
            className="sensor-input"
            autoComplete='off'
            placeholder='请输入设备名称/设备地址码'
            value={value}
            onChange={(e) => handleChange(e)}
           />
          <button className='sensor-search' onClick={() => handleSearch()}>搜索</button>
        </div>
        <div className="content-sensor">
          <div className="sensor-inner-box"> 
            {
               leftShowList.map((item,index) => {
                return (
                  <SensorFrame
                   item={item} 
                    isShow={showArr[index]} 
                    index={index} 
                    changeShow={(param) => changeShow(param)}
                    isBorder={border[index]}
                    handleCloseEvent={(ind) => handleCloseEvent(ind)}
                    />
                  
                )
              })
            }
          </div>
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
                            <div className={index === dataIndex ? 'active' : ''} onClick={() => changeDataIndex(index, item)}>
                            <img src={require('@/assets/img/normal.png')} alt="" />
                            <span 
                            className='check'
                            style={index === 0 ? {display: 'none'} : {display: 'block'}}
                            >
                            {
                               tickList[index - 1] ? <CheckSquareOutlined/> : <BorderOutlined/>  
                            }
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
    </TimeDataWrapper>
  )
})

export default TimeData