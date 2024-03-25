import styled from "styled-components";

export const StateButtonWrapper = styled.div`
     width: 98px;
     border-radius: 4px;
     border: 1px solid #ccc;
     height: 30px;
     cursor: pointer;
     border: 1px solid #ccc;
     overflow: hidden;
     display: inline-block;
     transform: translateY(6px);
     .inner-box {
        width: 156px;
        height: 30px;
        display: flex;
        border-radius: 4px;
        background-color: #FFFFFF;
        .common {
            width: 49px;
            line-height: 28px;
        }
        .left {
            background-color: #337ab7;
            color: #FFFFFF;
        }
        .middle {
            background-color: #FFFFFF;
        }
        .right {
            background-color: #EEEEEE;
            color: #000000;
        }
     }
     .open {
        margin-left: 0;
        transition: 0.2s linear;
     }
     .close {
        margin-left: -49px;
        transition: 0.2s linear;
     }
`