import React, { memo } from 'react'
import { SensorFrameWrapper } from './style'
import FactorInfo from '@/components/factor-info'
const SensorFrame = memo((props) => {
    const { item, isShow, index, changeShow, isBorder } = props

    const handleClick = () => {
        changeShow(index)
    }

  return (
    <SensorFrameWrapper style={ isBorder ? {border: '2px solid red'} : {}} >
        <div className="sensor-name" onClick={() => handleClick()}>
            <div className="before"></div>
            <span>{item.name}</span>
           
        </div>
        <div className={isShow ? 'sensor-value' : 'sensor-value sensor-value-active'} > 
        { 
            item.paramsList.map(item => {
                return (
                    <FactorInfo
                     size={20}
                     param={item.param}
                     value={item.value}
                     />
                )
            })
        }
        </div>
    </SensorFrameWrapper>
  )
})

export default SensorFrame