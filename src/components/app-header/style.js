import styled from "styled-components";

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 60px;
    background-color: #1588C7;
    display: flex;
    justify-content: space-between;
    .header-left {
         display: flex;
         padding-left: 5px;
        .logo {
         display: flex;
          align-items: center;
          height: 60px;
          img 
           {
            width: 40px;
            height: 26px;
            margin-right: 10px;
           }  
           span {
            font-size: 22px;
            color: #FFFFFF
           }
        }

        .home-see {
            cursor: pointer;
            li {
                display: inline-block;
                position: relative;
                a {
                    padding: 0 20px;
                    font-size: 14px;
                    color: #FFFFFF;
                    line-height: 60px;
                }
                &::after {
                    position: absolute;
                    content: '';
                    height: 5px;
                    background-color: #0ea7ea;
                    bottom: 0px;
                    left: 0px;
                    transition: 0.2s linear;
                }
                &:hover::after {
                    width: 100%;
                    transition: 0.2s linear;
                }

            }
            .active::after{
                width: 100%
            }

        }
    }

    .header-right {
        cursor: pointer;
       color: #FFFFFF;
       font-size: 14px;
        .right-nav {
            padding: 0 20px;
          &>li {
        position: relative;
        padding: 0 20px;
        display: inline-block;
        line-height: 60px;
        height: 60px;
        &::after {
                    position: absolute;
                    content: '';
                    height: 5px;
                    background-color: #0ea7ea;
                    bottom: 0px;
                    left: 0px;
                }
                &:hover::after {
                    width: 100%;
                    transition: 0.2s linear;
                }

       } 
       .active::after {
        width: 100%;
       }
       .first-item {
        position: relative;
        .color-list {
        display: none;
        position: absolute;
        z-index: 123222;
        color: #333333;
        border: 1px solid #d8dbdd;
        width: 100px;
        background-color: #FFFFFF ;
        left: 0;
        bottom: -130px;
        padding: 3px 0;
        li {
            line-height: 30px;
            height:30px;
            display: block;
            padding-left: 20px;
            &:hover {
                background-color: #f2f3f3;
            }
            .color {
                display: inline-block;
                width: 11px;
                height: 11px;
                margin-right: 3px;
            }
        }
       }
       &:hover .color-list {
        display: block;
       }
       }
       .second-item {
        position: relative;
        .global-outlined {
            font-size: 14px;
            margin-right: 4px;
        }
       .alert-list {
        display: none;
        position: absolute;
        z-index: 123222;
        color: #333333;
        border: 1px solid #d8dbdd;
        width: 100%;
        background-color: #FFFFFF ;
        left: 0;
        bottom: -100px;
        padding: 3px 0;
        li {
            line-height: 30px;
            height:30px;
            display: block;
            padding-left: 20px;
            &:hover {
                background-color: #f2f3f3;
            }
        }
        .alert-item-active {
            background-color: #1588C7!important;
            color: #FFFFFF;
        }
       }
        .tag-area {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 12px;
            height: 12px;
            right: 4px;
            overflow: hidden;
            .tag {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                border: 6px solid;
                transition: 0.1s linear;
            }
            .bottom-tag {
                bottom: -6px;
                border-color: transparent transparent #FFFFFF;
            }
            .top-tag {
                top: 3px;
                border-color: #FFFFFF transparent transparent;
                opacity: 0.5;
            }
        }
        &:hover  .tag-area .top-tag{
            top: -6px;
        }
        &:hover  .tag-area .bottom-tag {
            bottom: 3px;
        }
        &:hover .alert-list  {
            display: block;
        }
       }
       .third-item {
        .bell-outlined {
            font-size: 16px;
            font-weight: 700px;
        }
       }
       .fourth-item {
        position: relative;
        
        .person-content {
            display: none;
            width: 100%;
            position: absolute;
            left: 0;
            color: #333333;
            border: 1px solid #d8dbdd;
            bottom: -70px;
            padding: 3px 0;
            background-color: #FFFFFF;
            z-index: 123222;
            li {
                height: 30px;
                display: block;
                line-height: 30px;
                padding-left: 20px;
                &:hover {
                background-color: #f2f3f3;
            }

            }
            .person-item-active {
             background-color: #1588C7!important;
             color: #FFFFFF;
        }
        }
        .tag-area {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 12px;
            height: 12px;
            right: 4px;
            overflow: hidden;
            .tag {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                border: 6px solid;
                transition: 0.1s linear;
            }
            .bottom-tag {
                bottom: -6px;
                border-color: transparent transparent #FFFFFF;
            }
            .top-tag {
                top: 3px;
                border-color: #FFFFFF transparent transparent;
                opacity: 0.5;
            }
        }

        &:hover  .tag-area .top-tag{
            top: -6px;
        }
        &:hover  .tag-area .bottom-tag {
            bottom: 3px;
        }
        &:hover .person-content {
            display: block;
        }
       }
        }
   
      
    }
    
`