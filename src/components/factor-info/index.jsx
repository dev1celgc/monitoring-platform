import React, { forwardRef, memo, useState } from 'react'
import { FactorInfoWrapper } from './style'
import { SearchOutlined } from '@ant-design/icons'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeFactorIndexAction, changeFactorXAction, changeFactorYAction, changeIsShowTrueAction } from '@/store/modules/home'
const FactorInfo = memo(forwardRef((props) => {
  const dispatch = useDispatch()
  const { factorIndex, isShow, factorX, factorY } = useSelector((state) => ({
    factorIndex: state.home.factorIndex,
    isShow: state.home.isShow,
    factorX: state.home.factorX,
    factorY: state.home.factorY
  }), shallowEqual)
  const { param, value, index, size, show = true, unit } = props
  const [searchShow, setSearchShow] = useState(false)
  const changeSearchIsShow = (e) => {
    e.stopPropagation()
    setSearchShow(!searchShow)
    dispatch(changeFactorIndexAction(index))
    dispatch(changeIsShowTrueAction())
    dispatch(changeFactorXAction(e.clientX))
    dispatch(changeFactorYAction(e.clientY))
  }
  return (
    <FactorInfoWrapper factorx={factorX} factory={factorY} size={size}>
      <div className="factor-left">
        <img src={require('../../assets/img/node0.png')} alt="" />
      </div>
      <div className="factor-right">
        <div 
        className="search" 
        onClick={(e) => changeSearchIsShow(e)}
        style={show ? {display: 'block'} : {display: 'none'}}
        >
          <SearchOutlined/>
        </div>
        <div className='factor-name'>{param}({unit})</div>
        <div className="factor-value">
        {value}
        </div>
        <div className="factor-data-search" style={(isShow&&index===factorIndex) ? {display: 'block'} : {display: 'none'}}>
          <p>修改因子信息</p>
          <h2></h2>
          <p>历史数据查询</p>
          <p>报警数据查询</p>
          <p>通知记录查询</p>
        </div>
      </div>
    </FactorInfoWrapper>
  )
}))

export default FactorInfo