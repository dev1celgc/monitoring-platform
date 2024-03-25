import React, { memo, useState } from 'react'
import { SiderWrapper } from './style'
import { RightOutlined,HomeOutlined, GlobalOutlined, LineChartOutlined, } from '@ant-design/icons'
import SideCpn from './components'
import { useNavigate } from 'react-router-dom'
const AppSider = memo(() =>  {
    const navigate = useNavigate()
    //侧边栏数组
    const [sideList, setSideList] = useState(
        [
            {
                Cpn: <HomeOutlined/>,
                name: '首页',
                router: '/platform/home',
                subName: []
            },
            {
                Cpn: <GlobalOutlined/>,
                name: '在线监控',
                subName: [
                    {
                        text: '实时数据',
                        router: '/platform/timedata'
                    },
                    {
                        text: '视频监控',
                        router: '/platform/videomonitor'
                    },
                    {
                        text: '继电器控制',
                        router: '/platform/relaycontrol'
                    },
                ],
            },
            {
                Cpn: <LineChartOutlined/>,
                name: '数据中心',
                subName: [
                    {
                        text: '历史数据',
                        router: '/platform/historicdata'
                    },
                    {
                        text: '报警数据',
                        router: '/platform/alarmdata'
                    },
                    {
                        text: '继电器操作记录',
                        router: '/platform/operationrecord'
                    },
                    {
                        text: '通知记录',
                        router: '/platform/notificationrecord'
                    },
                ],
            },
        ]
    )
    const [control, setControl] = useState(0)
    const [subControl, setSubControl] = useState(-1)
    //改变二级标题选中的方法
    const changeSelected = (fIndex,sIndex,router) => {
        setSubControl(sIndex)
        setControl(fIndex)
        navigate(router)
    }
    const changeControl = (index) => {
        setControl(index)
    }
  return (
    <SiderWrapper>
    
        {
            sideList.map((item,firstIndex) => {
                return (
                    <SideCpn key={item.name} iteminfo={ item } index={firstIndex} control={control} changeControl={(index) => changeControl(index)} >
                        {item.Cpn}
                        {
                            item.subName.map((item, secondIndex) => {
                                return (
                                    <li key={item.text} onClick={e => changeSelected(firstIndex,secondIndex,item.router)} className={control === firstIndex && subControl === secondIndex ? 'active' : ''}>
                                    <span className="right-tag">
                                        <RightOutlined/>
                                    </span>
                                    <span>
                                        {item.text}
                                    </span>
                                </li>
                                )
                            })
                        }
                    </SideCpn>

                )
            })
        }
       
    </SiderWrapper>
  )
})

export default AppSider