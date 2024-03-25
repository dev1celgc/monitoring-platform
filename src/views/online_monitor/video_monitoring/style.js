import styled from "styled-components";

export const VideoMonitorWrapper = styled.div`
       display: flex;
       width: 100%;
       height: 100%;
       justify-content: space-between;
    .content-left {
        width: calc(100% - 250px);
        height: 100%;
        border: 1px solid #ddd;
        background-color: #FFF;
        padding: 5px 10px;
        display: flex;
        justify-content: space-between;
        .video-left {
            width: calc(100% - 270px);
            height: 100%;
            border-right: 1px solid #ccc;
            padding: 0 5px;
        }
        .video-right {
            width: 270px;
            height: 100%;
            padding: 0 5px;
            overflow-y: auto;
        }
    }
    .content-right {
        width: 240px;
        height: 100%;
        background-color: #FFF;
        border: 1px solid #ddd;
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
    .check {
        color: #ed9906;
    }

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
    }
`