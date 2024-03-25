import React, { memo, useEffect, useRef, useState } from 'react'
import { OperationRecordWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeIndexAction } from '@/store/modules/operation_record'
import { TreeSelect, DatePicker, Space, ConfigProvider, Table } from 'antd';
import { SearchOutlined, DeleteOutlined } from '@ant-design/icons'
import dayjs from 'dayjs';
import { nowTime, preHourTime } from '@/utils/time_tool';
import Mask from '@/components/mask';


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

const nowtime = nowTime()
const pretime = preHourTime()

const OperationRecord = memo(() => {
  const [equipName, setEquipName] = useState('室外噪声传感器')
  const dispatch = useDispatch()
  const [diaShow, setDiaShow] = useState(false)
  const handleRight = () => {
    setDiaShow(false)
  }
  const handleLeft = () => {
    setDiaShow(false)
  }


  const { controlIndex, totalSensorList } = useSelector(state => ({
    controlIndex: state.operationRecord.index,
    totalSensorList: state.home.totalSensorList,
  }), shallowEqual)
  const changeControlIndex = (index) => {
    dispatch(changeIndexAction(index))
    if(index !== 0) {
      setEquipName(totalSensorList[index])
    }
  }

  const [isShow, setIsShow] = useState(true)
  const showList = isShow ? totalSensorList : [totalSensorList[0]]
  return (
    <OperationRecordWrapper>
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
                <div className="equip-name">
                  <span className='item'>设备名称：</span>
                  <span className='name'>{equipName}</span>
                </div>
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
    </OperationRecordWrapper>
  )
})

export default OperationRecord