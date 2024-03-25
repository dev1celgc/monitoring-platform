import React, { Fragment,Suspense, memo } from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from '@/components/app-header'
import AppSider from '@/components/app-sider'
import Loading from '@/components/loading'


const HomeCore = memo(() => {
  return (
    <Fragment>
    <AppHeader/>
      <div className="content">
      <AppSider/>
      
      <div className='main-content'>
      <Suspense fallback={<Loading/>}>
        <Outlet/>
        </Suspense>
      </div>
       
      </div>
    
    </Fragment>
  )
})

export default HomeCore