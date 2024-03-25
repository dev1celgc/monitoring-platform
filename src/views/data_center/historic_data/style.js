import styled from "styled-components";

export const HistoricDataWrapper = styled.div`
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
            height: 46px;
            display: flex;
            width: 100%;
            .left-input {
                width: calc(100% - 350px);
                display: flex;
                .ant-select {
                    margin-right: 15px;
                }
                .ant-select-tree-treenode {
                        .ant-select-tree-checkbox {
                        
                    }
                    .ant-select-tree-checkbox-checked {
                    background-color: rgb(0, 150, 136); 
                }
                    
                    }
               
                .ant-select-selector {
                    border-radius: 0px;
                    overflow: hidden;
                    width: 100%;
                    position: relative;
                }
                .ant-select-focused .ant-select-selector {
                    border-color: rgb(0, 150, 136);
                }
                .ant-select-selector:hover {
                    border-color: rgb(0, 150, 136);
                }
                .ant-select-selection-overflow {
                    overflow: hidden;
                    flex-wrap: nowrap;
                    flex: 1;
                    position: absolute;
                    left: 5px;
                    width: calc(100% - 30px)
                }
                
                .ant-select-selection-item {
                    background-color: rgb(0, 150, 136); 
                    color: #FFFFFF;
                }
                .ant-select-selection-placeholder {
                    color: #333;
                }
                .ant-picker {
                    height: 36px;
                }
                .ant-picker-outlined:hover {
                    border-color: rgb(0, 150, 136);  
                }
                .ant-picker-outlined:focus-within {
                    border-color: rgb(0, 150, 136);  
                }
                .ant-picker-range .ant-picker-active-bar {
                    background-color: rgb(0, 150, 136); 
                }
                .ant-picker-input input::placeholder {
                    color: #333;
                }
            }
            .right-operate {
                margin-left: 15px;
                position: relative;
                width: 350px;;
                button {
                    background: #337ab7;
                    color: #fff;
                    height: 35px;  
                    padding: 0 15px;
                    border: none;
                    border-radius: 3px;
                    font-size: 14px;
                    cursor: pointer;
                }
                .tag {
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    display: flex;
                    div {
                        text-align: center;
                        line-height: 24px;
                        color: #242424;
                        border: 1px solid #ddd;
                        cursor: pointer;
                        margin-left: 4px;
                        width: 26px;
                        height: 26px;
                    }
                    .active {
                        border: 1px solid #1588c7;
                        color: #1588c7;
                    }
                }
            }
        }
        .control-content {
            background: #fff;
            height: calc(100% - 46px);
            padding: 5px 10px;
            border: 1px solid #ddd;
            .zwsj {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .table {
                border-collapse: collapse;
                border-spacing: 0;
                max-width: 1440px;
                .ant-table-cell {
                    min-width: 170px;
                    padding: 0px;
                    height: 40px;
                    line-height: 40px;
                    font-weight: 400;
                    text-align: center;
                }
                td {
                border: 1px solid #f0f0f0;
            }        
            th {
                border: 1px solid #f0f0f0;
                
            }
            }
            .ant-table-selection-column {
                    width: 50px;
            }
            .ant-table-wrapper .ant-table-container table>thead>tr:first-child >*:first-child {
                    border-radius: 0px;
                    width: 50px;
            }
            .ant-table-wrapper .ant-table-container table>thead>tr:first-child >*:last-child {
                border-radius: 0px;
            }
            .ant-table-cell:first-child {
                width: 50px;
                min-width: 50px;
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