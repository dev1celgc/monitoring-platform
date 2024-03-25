import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${require('@/assets/img/bj_img.png')}) no-repeat; 
  background-size: cover;
  position: relative;
  .seu-logo {
    position: absolute;
    left: 20px;
    top: 20px;
    img {
        width: 300px;
        height: 90px;
    }
  }
  .login-module {
    width: 430px;
    padding: 45px 15px;
    padding-top: 15px; 
    background: rgba(144, 217, 255, 0.3);
    box-shadow: 0 0 20px #000;
    position: absolute;
    right: 200px;
    top: 250px;
    border-radius: 10px;
    .title {
        font-size: 28px;
        margin-top: 3px;
        margin-bottom: 25px;
        color: #46b0e2;
        text-align: center;
        font-weight: 400;
    }
    .info-input {
        width: 100%;
        #basic {
            .ant-col-8 {
            flex: 0 0 25%;
        }
        .ant-form-item-required {
            color: #FFFFFF;
        }
        .ant-form-item-label {
            text-align: right;
        }
        .ant-form-item .ant-form-item-label >label {
            color: #FFFFFF;
        }
        .ant-form-item-control-input-content  {
            
        }
        .ant-input {
            /*  */
            color: #FFFFFF;
           
        }
        .ant-input-outlined {
            background-color: rgba(0,0,0,0);
            border-color: #46b0e2;
        }
        .ant-form-item  {
            margin-bottom: 18px;
        }
        .ant-form-item:nth-child(3) .ant-form-item-control {
            flex: 0.45 
        }
        .ant-form-item-explain-error {
            font-size: 11px;
        }
        .ant-row {
            margin-top: 15px;
            .ant-btn {
                background-color: #46b0e2;
                padding: 4px 130px;
            }
            .ant-col-offset-8 {
                margin-inline-start: 12%;
            }
        }
        }
        
    }
  }
` 