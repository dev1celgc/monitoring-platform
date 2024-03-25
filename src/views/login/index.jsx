import React, { memo, useState } from 'react'
import { LoginWrapper } from './style'
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = memo(() => {
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  //用户名
  const [username, setUsername] = useState('')
  //密码
  const [password, setPassword] = useState('')
  //验证码
  const [captcha, setCaptcha] = useState('')
  //登录的方法
  const handleSubmit = () => {
    if(username === 'h231114bjyq'&&password==='h231114bjyq'&&captcha==='ABCD') {
      message.success('登陆成功')
      localStorage.setItem('token', 'lgc')
      navigate('/')

    } else if(username === 'h231114bjyq'&&password==='h231114bjyq'&&captcha!=='ABCD') {
      message.warning('验证码输入错误')
    } else {
      message.warning('用户名或者密码输入错误')
    }
  }
  return (
    <LoginWrapper>
      <div className="seu-logo">
        <img src={require('@/assets/img/logo_white.png')} alt="" />
      </div>
        <div className="login-module">
          <h1 className='title'>综合环境监测云平台</h1>
          <div className="info-input">
             <Form
             name="basic"
             labelCol={{
               span: 8,
             }}
             wrapperCol={{
               span: 16,
             }}
             style={{
               maxWidth: 600,
             }}
             initialValues={{
               remember: true,
             }}
             onFinish={onFinish}
             onFinishFailed={onFinishFailed}
             autoComplete="off"
              >
            <Form.Item
              label="账号"
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            >
              <Input value={username} onChange={(e) => setUsername(e.target.value)}/>
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码!',
                },
              ]}
            >
              <Input.Password value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item
              label="验证码"
              name="captcha"
              rules={[
                {
                  required: true,
                  message: '请输入验证码!',
                },
              ]}
            >
              <Input value={captcha} onChange={(e) => setCaptcha(e.target.value)}/>
            </Form.Item>


            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" onClick={() => handleSubmit()}>
                立即登录
              </Button>
            </Form.Item>
        </Form>
          </div>
        </div>
        
    </LoginWrapper>
  )
})

export default Login