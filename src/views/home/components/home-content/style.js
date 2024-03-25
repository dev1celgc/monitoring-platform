import styled from "styled-components";

export const HomeContentWrapper = styled.div`
   width: 100%;
   height: 380px;
   padding: 0 5px;
   display: flex;
`

export const LeftContentWrapper = styled.div`
   width: 240px;
   height: 100%;
   background-color: #FFFFFF;
   box-shadow: 0px 0px 5px 4px rgb(105 111 125 / 12%);
   h4 {
    font-size: 14px;
    line-height: 31px;
    padding: 0 10px;
    font-weight: 400;
    border-bottom: 1px solid rgb(193, 194, 197);
   }
   .left-list {
    width: 100%;
    font-size: 14px;
    padding: 0 10px;
    cursor: pointer;
    li {
        display: flex;
        height: 24px;
        padding-left: 24px;
      
        div {
            display: flex;
            height: 24px;
            line-height: 24px;
            align-items: center;
            img {
                margin-right: 5px;
            }
            &:hover {
            background-color: #e7f4f9;
            }
        }
        .active {
            background-color: #beebff !important;
        }
        .icon {
            width: 24px;
            height: 24px;
            background-image: url(${require('@/assets/img/32px.png')}) ;
            background-position: -68px -4px;
        }
       
        .f-icon {
            width: 24px;
            height: 24px;
            background-image: url(${require('@/assets/img/32px.png')}) ;
            background-position: -132px -4px;
        }
        .f-icon-active {
            background-position: -100px -4px;
        }
        
    }

    li:nth-child(1) {
        padding-left: 0;
        .icon {
            background-position: -260px -4px;
        }
        img {
            width: 0;
            height: 0;
            margin-right: 0;
        }
    }
   }
`

export const MiddleContentWrapper = styled.div`
      width: calc(65% - 250px);
      height: 100%;
      background-color: #FFFFFF;
      box-shadow: 0px 0px 5px 4px rgb(105 111 125 / 12%);
      margin-left: 12px;
      position: relative;

      h4 {
    font-size: 14px;
    line-height: 31px;
    padding: 0 10px;
    font-weight: 400;
    border-bottom: 1px solid rgb(193, 194, 197);
    .btn {
        width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border-radius: 3px;
    background: #fff;
    color: #242424;
    border: 1px solid #ccc;
    cursor: pointer;
    float: right;
    margin-top: 3px;
    font-size: 19px;
    }
   }
   #baidu-map {
    width: 100%;
    height: calc(100% - 31px);
    position: absolute;
    z-index: 1;
   }
`

export const RightContentWrapper = styled.div`
      width: 35%;
      height: 100%;
      background-color: #FFFFFF;
      box-shadow: 0px 0px 5px 4px rgb(105 111 125 / 12%);
      margin-left: 12px;
      font-size: 14px;
     
      h4 {
         line-height: 31px;
         padding: 0 10px;
         font-weight: 400;
         border-bottom: 1px solid rgb(193, 194, 197);
         .btn {
         width: 25px;
         height: 25px;
         line-height: 25px;
         text-align: center;
         border-radius: 3px;
         background: #fff;
         color: #242424;
         border: 1px solid #ccc;
         cursor: pointer;
         float: right;
         margin-top: 3px;
         font-size: 19px;
       }
      }
      .right-list {
        padding: 0 10px;
        padding-top: 5px;
        width: 100%;
        position: relative;
      .relay-operation {
        position: absolute;
        width: 160px;
        background: #d7dee3;
        top: 5px;
        right: 10px;
        padding: 6px 10px;
        text-align: center;
        .operation-item {
            width: 100%;
            height: 30px;
            line-height: 30px;
            margin-top: 7px;
            background: #fff;
            border: none;
            border-radius: 3px;
        }
      }
        li {
            height: 32px;
            line-height: 32px;
            .item-name {
            font-weight: 700;
            margin-right: 15px;
        }
        .ant-btn {
            color: #FFFFFF !important;
            font-size: 12px;
            width: 72px;
            height: 25px;
            text-align: center;
            padding: 0px;
            float: right;
        }
        .ant-btn-primary {
            background-color: #009688 !important;
            border-radius: 3px;
        }
        }
        p {
            padding-left: 5px;
            border-bottom: 1px solid rgb(193, 194, 197);
            height: 32px;
            line-height: 32px
        }
        .video-info {
            margin-top: 18px;
            text-align: center;
        }
       
      }
     
       
`