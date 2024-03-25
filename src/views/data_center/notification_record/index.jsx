import React, { memo, useEffect, useState } from 'react'
import { NotificationRecordWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeIndexAction } from '@/store/modules/notification_record'
import { TreeSelect, DatePicker, Space, ConfigProvider, Table, Select } from 'antd';
import { SearchOutlined, DeleteOutlined } from '@ant-design/icons'
import dayjs from 'dayjs';
import { nowTime, preHourTime } from '@/utils/time_tool';
import Mask from '@/components/mask';

  //下拉菜单选择的方法
  const { SHOW_PARENT } = TreeSelect;

  //选择时间的方法
  const { RangePicker } = DatePicker;
  const onRangePickerChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
    console.log(dayjs(dateString[1]).valueOf())
  };
  const onOk = (value) => {
    console.log('onOk: ', value);
  }
  
  //返回下拉菜单新数组的方法
  const returnNewArray = (array) => {
    return (
      array.map((item1,index1) => {
        return   {
          title: item1.data.deviceName,
          value: `0-${index1}`,
          key: `0-${index1}`,
          children: item1.data.factors.map((item2,index2) => {
            return {
              title: `${item1.data.deviceName}-${item2.nodeId}-${item2.factorName}`,
              value: `0-${index1}-${index2}`,
              key: `0-${index1}-${index2}`,
            }
          })
        }
      })
    
    )
  }
  const nowtime = nowTime()
  const pretime = preHourTime()

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

const NotificationRecord = memo(() => {
  const [tagNumber, setTagNumber] = useState(1)
  //下拉框渲染数组
  const [treeData, setTreeData] = useState([])

  const [value, setValue] = useState([]);
  const onChange = (newValue) => {
    console.log(value)
    setValue(newValue);
  };

  const dispatch = useDispatch()
   //控制右侧传感器下拉菜单的显示和隐藏
   const [isShow, setIsShow] = useState(true)
  
    const { controlIndex, totalSensorList, noiseSensor, airSensor, hostSensor, environmentSensor } = useSelector((state) => ({
      controlIndex: state.notificationRecord.index,
      totalSensorList: state.home.totalSensorList,
      noiseSensor: state.historicData.noiseSensor,
      airSensor: state.historicData.airSensor,
      hostSensor: state.historicData.hostSensor,
      environmentSensor: state.historicData.environmentSensor
    }), shallowEqual)
    const showList = isShow ? totalSensorList : [totalSensorList[0]]

    //改变高亮以及下拉框数组
    const changeControlIndex = (index) => {
      dispatch(changeIndexAction(index))
      let list = []
      if(index===1) {
        list = returnNewArray([noiseSensor])
      } else if(index===2) {
        list = returnNewArray([airSensor])
      } else if(index===3) {
        list = returnNewArray([hostSensor])
      } else if(index===4) {
        list = returnNewArray([environmentSensor])
      } else if(index===0) {
        list = returnNewArray([noiseSensor, airSensor, hostSensor, environmentSensor])
      }
      setTreeData([...list])
      setValue([])
    }

    useEffect(() => {
      setTreeData([...returnNewArray([noiseSensor])])
    }, [])

    const tProps = {
      treeData,
      value,
      onChange,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      placeholder: 'Please select',
      style: {
        width: '100%',
      },
    };

    //mask弹窗的方法
    const [diaShow, setDiaShow] = useState(false)
    const handleRight = () => {
      setDiaShow(false)
    }
    const handleLeft = () => {
      setDiaShow(false)
    }

  return (
     <NotificationRecordWrapper>
        <Mask
      notice='您确定要删除吗'
      text='如果继续,将删除这些数据，删除后将无法恢复，请谨慎操作！'
      leftText='是的，我要删除！'
      rightText='让我再考虑一下...'
      handleRight={() => handleRight()}
      handleLeft={() => handleLeft()}
      isShow={diaShow}
      />
      <div className="content-left">
          <div className="control-top">
            <ConfigProvider
                theme={{
                  token: {
                    // Seed Token，影响范围大
                    colorPrimary: 'rgb(0, 150, 136)',
                    borderRadius: 2,
                    // 派生变量，影响范围小
                    colorBgContainer: '#FFFFFF',
                  },
                }}
            >
              <div className="left-input">
            <TreeSelect 
            {...tProps} 
            placeholder='请选择'
            notFoundContent='暂无数据'
            style={{width: 'calc(100% - 600px)'}}
             />
              <Space wrap>
              <Select
               defaultValue="all"
               style={{
                 width: 220,
               }}
               onChange={handleChange}
               options={[
                 {
                   value: 'all',
                   label: '全部',
                 },
                 {
                   value: 'message',
                   label: '短信通知',
                 },
                 {
                   value: 'voice',
                   label: '语音通知',
                 },
                 {
                  value: 'email',
                  label: '邮件通知',
                },
                {
                  value: 'wechat',
                  label: '微信通知',
                },
                
               ]}
             />
            </Space>
            <Space direction="vertical" size={12}>
                <RangePicker
                placeholder={[`${pretime}`,`${nowtime}`]}
                  showTime={{
                    format: 'HH:mm',
                  }}
                  format="YYYY-MM-DD HH:mm"
                  onChange={onRangePickerChange}
                  onOk={onOk}
                />
           </Space>
            </div>
            </ConfigProvider>
            <div className="right-operate">
              <button>
                <SearchOutlined style={{marginRight: '2px'}}/>
                查询
              </button>
              <button style={{marginLeft: '3px', backgroundColor: '#bf0202'}} onClick={() => setDiaShow(true)}>
                <DeleteOutlined style={{marginRight: '2px'}}/>
                删除
              </button>
            </div>
          </div>
        <div className="control-content">
          <div className="zwsj">
            <img src={require('@/assets/img/zwsj2.png')} alt="" />
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
                            <div className={index === controlIndex ? 'active' : ''} onClick={() => changeControlIndex(index, item)}>
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
     </NotificationRecordWrapper>
  )
})

export default NotificationRecord
