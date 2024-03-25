import styled from "styled-components";

export const RelayControlWrapper = styled.div`
     display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    .content-left {
        width: calc(100% - 250px);
        height: 100%;
        background-color: #FFF;
        .control-top {
            background: #fff;
            padding: 5px 10px;
            display: flex;
            justify-content: flex-end;
        }
        .control-content {
            background: #fff;
            height: calc(100% - 46px);
            padding: 5px 10px;
            border: 1px solid #ddd;
           
            .content-table {
                border: 1px solid #ddd;
                height: 100%;
                padding: 5px 10px;
                position: relative;
             .data-show {
                position: absolute;
                height: 31px;
                top: 755px;
                left: 10px;
                z-index: 1212;
                line-height: 31px;
                font-size: 14px;
            }
                .input {
                padding: 10px 0;
                display: flex;
                flex-direction: row-reverse;
                input {
                    height: 34px;
                    padding: 6px 12px;
                    font-size: 14px;
                    border: 1px solid #ccc;
                    color: #555;
                    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
                    &:focus {
                        border-color: #1588c7;
                        box-shadow: 0px 0px 10px -3px #1588c7;
                    }
                }

            }
            .control-table {
            background: #fff;
            height: calc(100% - 50px);
            table {
                border-collapse:collapse;
            }
            .ant-spin-container {
                height: 100%;
                position: relative;
                .ant-pagination {
                    position: absolute;
                    top: 680px;
                    left: 75%;
                    a {
                        font-weight: 400;
                        color: #337ab7;
                    }
                    .ant-pagination-item-active a {
                        color: #FFFFFF;
                        background-color: #337ab7;
                    }
                    .ant-pagination-item-link {
                        border: 1px solid #ddd;
                        color: #337ab7;
                        font-size: 10px;
                        border-radius: 4px 0 0 4px  ;
                    }
                    .ant-pagination-next .ant-pagination-item-link {
                        border-radius: 0 4px 4px 0;
                    }
                }
                .ant-pagination-item {
                    border-color: #ddd;
                    border-radius: 0px;
                }
            }
            .ant-table-cell {
                padding: 0 8px;
                height: 37px;
                line-height: 35px;
                text-align: center;
                border: 1px solid #ddd;
                color: #555;
            }
            .ant-checkbox-inner {
                border-radius: 0px;
            }
        }
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