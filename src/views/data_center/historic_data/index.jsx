import React, { PureComponent, memo, useEffect, useRef, useState } from 'react'
import { HistoricDataWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeIndexAction } from '@/store/modules/historic_data'
import { TreeSelect, DatePicker, Space, ConfigProvider, Table} from 'antd';
import { TableOutlined, LineChartOutlined, EnvironmentOutlined, SearchOutlined, CodepenSquareFilled } from '@ant-design/icons'
import dayjs from 'dayjs';
import { nowTime, preHourTime } from '@/utils/time_tool';
import Notice from '@/components/notice';
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


const sensorAdress = {
  title: '设备地址',
  dataIndex: 'name'
}

const recordTime = {
  title: '记录时间',
  dataIndex: 'recordTime'
}

const HistoricData = memo(() => {
  //columns
  const [columns, setColumns] = useState([])
  //data
  const [data, setData] = useState([])
  const [tagNumber, setTagNumber] = useState(1)
  //下拉框渲染数组
  const [treeData, setTreeData] = useState([])

  const [value, setValue] = useState([]);
  const [renderValue, setRenderValue] = useState([])
  const onChange = (newValue) => {
    // console.log(value)
    setValue(newValue);
  };

  const dispatch = useDispatch()
   //控制右侧传感器下拉菜单的显示和隐藏
   const [isShow, setIsShow] = useState(true)
    const { controlIndex,
            totalSensorList, 
            noiseSensor, 
            airSensor,
            hostSensor,
            environmentSensor,
            noiseData,
            airData,
            hostData,
            environmentData,
      } = useSelector((state) => ({
      controlIndex: state.historicData.index,
      totalSensorList: state.home.totalSensorList,
      noiseSensor: state.historicData.noiseSensor,
      airSensor: state.historicData.airSensor,
      hostSensor: state.historicData.hostSensor,
      environmentSensor: state.historicData.environmentSensor,
      noiseData: state.lineChartData.noiseData,
      airData: state.lineChartData.airData,
      hostData: state.lineChartData.hostData,
      environmentData: state.lineChartData.hostData
    }), shallowEqual)

      //更新表格数组
      useEffect(() => {
        //获取value的最新值
        let currentUseSensor = []
        if(controlIndex === 1) currentUseSensor = [...noiseData]
        else if(controlIndex === 2) currentUseSensor = [...airData]
        else if(controlIndex === 3) currentUseSensor = [...hostData]
        else if(controlIndex === 4) currentUseSensor = [...environmentData]
        console.log(controlIndex)
        console.log(currentUseSensor)

        const indexList = []
        if(value.length > 1 || (value.length === 1 && value[0].length === 5)) {
          value.forEach(item => {
            indexList.push(+item[item.length - 1])
          })
        } else if(value.length === 1 && value[0].length === 3) {
          currentUseSensor.forEach((item, index) => {
            indexList.push(index)
          })
        }

          //更新colums数组
          const columns = []
          columns.push(sensorAdress)
          indexList.forEach((item, index) => {
            columns.push({
              title: '节点-' + `${currentUseSensor[item].data[0].nodeId}` + '-' + `${currentUseSensor[item].data[0].data[0].registerName}`,
              dataIndex: `${index}`
            })
          })
          columns.push(recordTime)

          //更新data数组
          const data = []
          const dataItem = {}
          indexList.forEach((item, index) => {
            dataItem.name = 0
            dataItem.recordTime = 0
            dataItem.key = index
            dataItem[`${index}`] = 0 
          })
          const selectedUseData = []
          indexList.forEach(item => {
            selectedUseData.push(currentUseSensor[item])
          })
          
          for(var i = 0; i < 6; i++) {
            data.push({...dataItem})
          }

          selectedUseData.forEach((item1, index1) => {
            
            item1.data.forEach((item2, index2) => {

              data[index2][`${index1}`] = item2.data[0].value
              data[index2].name = item2.deviceAddr
              data[index2].recordTime = item2.recordTimeStr
              data[index2].key = index2
            })
          })
        setColumns(columns)
        setData(data)
       
      },[renderValue])


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
        list = []
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

    //表格的方法
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  
  
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  //控制选取设备节点提示框的显示和隐藏
  const [noticeShow, setNoticeShow] = useState(false)
  //点击查询按钮的方法
  const timer = useRef()
  const handleSearchClick = () => {
    if(value.length === 0) {
      setNoticeShow(true)
      if(timer.current) {
        clearTimeout(timer.current)
      }
      
         timer.current = setTimeout(() => {
          setNoticeShow(false)
          timer.current = null
        }, 1500)
    } else {
      setRenderValue([...value])
    }
   
    
  }
  return (
    <HistoricDataWrapper>
      <Notice
      isShow={noticeShow}
      text='请选择设备节点'
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
            style={{width: 'calc(100% - 350px)'}}
             />
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
              <button onClick={() => handleSearchClick()}>
                <SearchOutlined/>
                查询
              </button>
              <div className='tag'>
                <div onClick={() => setTagNumber(1) } className={tagNumber===1 ? 'active' : ''}>
                  <TableOutlined />
                </div>
                <div onClick={() => setTagNumber(2) } className={tagNumber===2 ? 'active' : ''}>
                  <LineChartOutlined/>
                </div>
                <div onClick={() => setTagNumber(3) } className={tagNumber===3 ? 'active' : ''}>
                  <EnvironmentOutlined/>
                </div>
              </div>
            </div>
          </div>
        <div className="control-content">
          {
            columns.length > 2 ?
            <div>
            <div
              style={{
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  marginLeft: 8,
                }}
              >
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
              </span>
            </div>
            <Table className='table' rowSelection={rowSelection} columns={columns} dataSource={data}  scroll={{x: true}} pagination={false}/>
          </div> :
           <div className="zwsj">
           <img src={require('@/assets/img/zwsj2.png')} alt="" />
         </div> 
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
    </HistoricDataWrapper>
  )
})

export default HistoricData
