import styled from "styled-components"

export const SensorFrameWrapper = styled.div`
     border: 1px solid #1588c7;
     margin-bottom: 5px;
     .sensor-name {
        height: 30px;
        line-height: 30px;
        width: 100%;
        padding: 0 15px;
        color: #fff;
        background: #1588c7;
        font-size: 14px;
        cursor: pointer;
        .before {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background-color: rgb(52, 247, 95);
            border: 1px solid #ddd;
            margin-right: 3px;
            float: left;
            margin-top: 7px;
        }
        .close {
            color: #fff;
            float: right;
        }
     }
     .sensor-value {
        padding: 10px 5px;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
     }
     .sensor-value-active {
        display: none;
     }
    
`