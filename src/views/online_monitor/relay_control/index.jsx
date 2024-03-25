import React, { memo, useEffect, useRef, useState } from 'react'
import { RelayControlWrapper } from './style'
import { changeIndexAction } from '@/store/modules/relay_control'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { Table } from 'antd';
import MyButton from './components/button'
import StateButton from './components/state_button'
import { endRow, startRow } from '@/utils/pageRecord'
import Notice from '@/components/notice'
const columns = [
  {
    title: '设备名称',
    dataIndex: 'ename',
    key: 'ename',
  },
  {
    title: '继电器编号',
    dataIndex: 'num',
    key: 'num',
  },
  {
    title: '继电器名称',
    dataIndex: 'rname',
    key: 'rname',
  },
  {
    title: '是否可用',
    dataIndex: 'isuse',
    key: 'isuse',
  },
  {
    title: '状态',
    dataIndex: 'state',
    key: 'state',
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
  },
  {
    title: '工作模式',
    dataIndex: 'mode',
    key: 'mode',
  },
];
//表单内部的方法
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
}


const RelayControl = memo(() => {
  const list = useRef()
  //防抖函数
  const timer = useRef()
  //节流函数 
  const time = useRef()
  //设置操作成功弹窗的显示和隐藏
  const [noticeShow, setNoticeShow] = useState(false)
  //搜索框的value
  const [value, setValue] = useState('')
  //获取redux中每个传感器的信息
  const { nosieList, airList, hostList, enviromentList,totalSensorList, controlIndex} = useSelector(state => ({
    nosieList: state.relaycontrol.nosieList,
    airList: state.relaycontrol.airList,
    hostList: state.relaycontrol.hostList,
    enviromentList: state.relaycontrol.enviromentList,
    totalSensorList: state.home.totalSensorList,
    controlIndex : state.relaycontrol.index,
  }), shallowEqual)

  //改变当前的状态
  const changeState = () => {
    setNoticeShow(true)
    if(timer.current) {
      clearTimeout(timer.current)
    }
    timer.current = setTimeout(() => {
      setNoticeShow(false)
      timer.current = null
    }, 1500)
  }

  useEffect(() => {
    const newList = [...nosieList.data]
    const newDataSource = newList.map((item,index) => {
      return (
        {
          key: `${index + 1}${item.deviceAddr}${new Date().getTime()}` ,
          ename: item.deviceName,
          num: item.relayNo,
          rname: item.relayName,
          isuse: item.enabled ? '可用' : '不可用',
          state: <StateButton onClick={() => changeState()}/>,
          operation:
           <MyButton
          bgColor='#009688'
          text='继电器编辑'
          height={25}
          size={12}
          lineheight={23}
          />,
          mode: 
          <MyButton
          bgColor='#009688'
          text='自动'
          height={25}
          size={12}
          lineheight={23}
          />,
        }
      )
    })
    list.current = [...newDataSource]
    setDataSource(newDataSource)
  }, [])
  //表格数据源
  const [dataSource, setDataSource] = useState([])
  //当前页面的个数
  const [currentPageSize, setCurrentPageSize] = useState(14)
  //当前页面的页码
  const [currentPage, setCurrentPage] = useState(1)
  //页面尺寸变化的方法
    const onShowSizeChange = (current, pageSize) => {
    setCurrentPageSize(pageSize)
   }

   //页面变化的方法
   const onPageChange = (current, pageSize) => {
    setCurrentPage(current)
   }
    
    const [selectionType, setSelectionType] = useState('checkbox');
    const dispatch = useDispatch()
    //控制右侧传感器下拉菜单的显示和隐藏
    const [isShow, setIsShow] = useState(true)

    const showList = isShow ? totalSensorList : [totalSensorList[0]]
    const changeControlIndex = (index) => {
      dispatch(changeIndexAction(index))
      let newList
      //切换不同数组
      if(index===1) {
        newList = [...nosieList.data]
      } else if(index===2) {
        newList = [...airList.data]
      } else if(index===3) {
        newList = [...hostList.data]
      } else if(index===4) {
        newList = [...enviromentList.data]
      } else if(index===0) {
        newList = [
          ...nosieList.data,
          ...airList.data, 
          ...hostList.data,
          ...enviromentList.data
        ]
      }
      const newDataSource = newList.map((item,index) => {
        return (
          {
            key: `${index + 1}${item.deviceAddr}${new Date().getTime()}` ,
            ename: item.deviceName,
            num: item.relayNo,
            rname: item.relayName,
            isuse: item.enabled ? '可用' : '不可用',
            state: <StateButton onClick={() => changeState()}/>,
            operation:
             <MyButton
            bgColor='#009688'
            text='继电器编辑'
            height={25}
            size={12}
            lineheight={23}
            />,
            mode: 
            <MyButton
            bgColor='#009688'
            text='自动'
            height={25}
            size={12}
            lineheight={23}
            />,
          }
        )
      })
      list.current = [...newDataSource]
      setDataSource(newDataSource)
    }

    //搜索框改变事件
    const handleInputChange = (e) => {
      setValue(e.target.value)
      if(!time.current) {
        time.current = setTimeout(() => {
          const newList = [...list.current]
          setDataSource(newList.filter(item => {
            return item.ename.includes(`${e.target.value}`)
          }))
          time.current = null
        }, 1500)
      }
    }
  return (
     <RelayControlWrapper>
      <Notice
      isShow={noticeShow}
      text='操作成功'
      />
      <div className="content-left">
        <div className="control-top">
          <MyButton
          bgColor='#009688'
          text='应用于其他设备'
          />
          <MyButton
          bgColor='#009688'
          text='添加继电器' 
          icon={<PlusCircleOutlined/>}
          />
          <MyButton
          bgColor='#009688'
          text='批量添加继电器'
          icon={<PlusCircleOutlined/>}
          />
          <MyButton
          bgColor='#009688'
          text='批量控制继电器'
          />
          <MyButton
          bgColor='#bf0202'
          text='删除继电器'
          icon={<DeleteOutlined/>}
          />
        </div>
        <div className="control-content">
          <div className="content-table">
          <div className="data-show">
              显示第 {startRow(currentPage, currentPageSize)} 条到第 {endRow(currentPage, currentPageSize, dataSource.length)} 条记录,总共 {dataSource.length} 条记录 每页显示 {currentPageSize} 条记录
            </div>
               <div className="input">
                 <input type="text" placeholder='搜索' value={value} onChange={e => handleInputChange(e)} />
               </div>
               <div className="control-table">
               <Table
                 rowSelection={{
                   type: selectionType,
                   ...rowSelection,
                 }}
                 scroll={{
                  scrollToFirstRowOnChange: true,
                  y: 610
                 }}
                 columns={columns}
                 dataSource={dataSource}
                 pagination={{
                  onShowSizeChange: onShowSizeChange,
                  showSizeChanger: true,
                  pageSizeOptions: [7, 14, 21],
                  defaultPageSize: 14,
                  onChange: onPageChange
                 }}
               />
               </div>
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
     </RelayControlWrapper>
  )
})

export default RelayControl