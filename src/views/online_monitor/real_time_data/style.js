import styled from "styled-components"

export const TimeDataWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
   .content-left {
    width: calc(100% - 250px);
    height: 100%;
    border: 1px solid #ddd;
    background-color: #FFF;
    .content-operate {
        height: 37px;
        border-bottom: 1px solid #ddd;
        line-height: 33px;
        padding: 0 10px;
        button {
            background: #fff;
            color: #242424;
            border: 1px solid #ccc;
            font-size: 12px;
            border-radius: 3px;
            height: 25px;
            line-height: 25px;
            padding: 0 12px;
            outline: 0;
            cursor: pointer;
            margin-right: 5px;
        }
        .sensor-input {
            width: 240px;
            height: 30px;
            background: none;
            border: 1px solid #8ca9cf;
            border-radius: 3px;
            color: #5e90d3;
            padding-left: 10px;
            margin-right: 5px;
            padding-block: 1px;
            padding-inline: 2px;
        }
        .sensor-search {
            height: 30px;
            width: 58px;
            vertical-align: middle;
            line-height: 28px;
            background: #337ab7;
            color: #fff;
            font-size: 14px;
            text-align: center;
            border: 0;
        }
    }
    .content-sensor {
        padding: 10px;
        width: 100%;
        height: calc(100% - 37px);
        .sensor-inner-box {
            width: 100%;
            height: 100%;
            overflow: hidden;
            overflow-y: scroll;
        }
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