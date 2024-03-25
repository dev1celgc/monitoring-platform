import React, { memo, useEffect } from 'react'
import { useLocation, useNavigate, useRoutes } from 'react-router-dom'
import routes from './router'
import { message } from 'antd'


//路由前置守卫
const ToHome = () => {
  const navigate = useNavigate()
  //加载完组件后进行跳转首页
  useEffect(() => {
    navigate('/')
  }, [])
  return <div/>
}


const ToLogin = () => {
  const navigate = useNavigate()
  //加载完组件进行跳转
  useEffect(() => {
    navigate('/login')
    message.warning('您还没有登录')
  },[])
  return <div/>
}

const BeforeRouterEnter = () => {
  const outlet = useRoutes(routes)
  const location = useLocation()
  //如果访问的是登录页面，并且有token，跳转到首页
  let token = localStorage.getItem('token')
  if(location.pathname === '/login' && token) {
    return <ToHome/>
  }
  //如果访问的不是登陆页面，而且没有token，跳转到登录页
  if(location.pathname !== '/login' && !token) {
    return <ToLogin/>
  }
  return outlet
}

const App =  memo(() => {

  return (
      <div className='app'>
         <BeforeRouterEnter/>
      </div>
  )
})

export default App

