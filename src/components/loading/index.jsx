import React, { memo } from 'react'
import { LoadingWrapper } from './style'
import { Spin } from 'antd'
const Loading = memo(() => {
  return (
    <LoadingWrapper>
    <div className="loading">
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </div>
    </LoadingWrapper>
  )
})

export default  Loading