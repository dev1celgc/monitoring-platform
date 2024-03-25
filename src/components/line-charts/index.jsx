import React, { memo } from 'react'
import { LineChartWrapper } from './style'
import ReactEcharts from 'echarts-for-react'

const LineChart = memo((props) => {
    const { option, name, unit } = props
  return (
    <LineChartWrapper>
        <span className="title">{name}({unit})</span>
        <ReactEcharts option={option} style={{width: '100%', height: '100%'}}></ReactEcharts>
    </LineChartWrapper>
  )
})

export default LineChart