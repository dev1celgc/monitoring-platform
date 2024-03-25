import styled from "styled-components";

export const HomeFooterWrapper = styled.div`
    width: 100%;
   height: 100%;
   background-color: #FFFFFF;
   box-shadow: 0px 0px 5px 4px rgb(105 111 125 / 12%);
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
   .factor-info-list {
        width: 100%;
        height: calc(100% - 36px);
        padding: 5px;
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
        align-content: flex-start;
    }
    .zwsj {
        width: 100%;
        text-align: center;
        padding-top: 40px;
    }
      
`