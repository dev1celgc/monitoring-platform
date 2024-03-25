import styled from "styled-components";

export const EquipParamWrapper = styled.div`
padding: 5px;
height: 100%;
width: 25%;
position: relative;
cursor: pointer;
    .inner-text {
     height: 100%;
      padding: 0 25px;
      padding-top: 22px;
      width: 100%;
      background-color: yellow;
      text-align: right;
      color: #FFFFFF;
      position: relative; 
      font-weight: 400;
      .icon {
        position: absolute;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 40px;
        top: 50%;
        transform: translateY(-50%);
        left: 30px; 
      }
      .number {
        font-size: 24px;
      }
    }

    .home-list {
      height: 400px;
      width: 100%;
      position: absolute;
      background-color: #eef2f9;
      left: 0;
      top: 90px;
      text-align: left;
      border: 1px solid #ccc;
      color: #333333;
      font-size: 14px;
      padding: 5px;
      z-index: 1000;
      .name {
        height: 35px;
        line-height: 30px;
        .search {
          height: 30px;
          background: none;
          border: 1px solid #8ca9cf;
          color: #5e90d3;
          border-radius: 3px;
          margin-left: 150px;
          padding-left: 5px;
          font-size: 12px;
          float: right;
        }
        .search:focus {
          outline: none;
        }
      }
      .title {
        background-color: #8ca9cf;
        span {
          width: 50%;
        height: 30px;
        text-align: center;
        line-height: 30px;
        display: inline-block;
        font-weight: 700;
        }
      
      }
      .list {
        span {
        width: 50%;
        height: 30px;
        text-align: center;
        line-height: 30px;
        display: inline-block;
        }
      }
      .list-active {
        color: #FFFFFF;
        background: #7fa5d5!important;
      }
      .no-equip {
        text-align:center;
        margin-top: 140px;
      }
    }
    .home-list-active {
      height: 0;
      width: 0;
      border: 0;
      padding: 0;
      transition: 0.2s linear; 
    }
`