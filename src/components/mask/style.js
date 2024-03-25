import styled from "styled-components";


export const MaskWrapper = styled.div`
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1344454;
        background-color: rgb(0, 0, 0, .3);
        .dialogue {
            width: 360px;;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 1px 1px 50px rgba(0,0,0,.3);
            color: #333333;
            background-color: #FFFFFF;
            font-size: 14px;
            .notice {
                height: 42px;
                line-height: 42px;
                border-bottom: 1px solid #eee;
                padding: 0 20px;
                border-radius: 2px 2px 0 0;
                background-color: #F8F8F8;
                .close {
                    float: right;
                    cursor: pointer;
                }  
            }
            .notice-text {
                padding: 20px;
                line-height: 24px;
            }
            .button {
                padding: 0 15px 12px;
                display: flex;
                justify-content: space-around;
                button {
                    height: 28px;
                    line-height: 28px;
                    padding: 0 15px; 
                    border-radius: 2px;
                    cursor: pointer;
                    margin-right: 5px;
                    border: 1px solid;
                }  
                .f-btn {
                    border-color: #1E9FFF;
                    background-color: #1E9FFF;
                    color: #fff;
                }
                .s-btn {
                    border-color: #dedede;
                    background-color: #FFFFFF;
                }
            }
        }
    

`