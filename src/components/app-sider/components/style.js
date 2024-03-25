import styled from "styled-components";

export const SideCpnWrapper = styled.div`
    position: relative;
    .main-title {
      position: relative;
      height: 45px;
      padding: 0 20px;
      line-height: 45px;
      cursor: pointer;
      .icon {
         font-size: 16px;
         margin-right: 6px;
      }
      .tag-area {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 12px;
            height: 12px;
            right: 8px;
            overflow: hidden;
            .tag {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                border: 7px solid;
                transition: 0.1s linear;
            }
            .bottom-tag {
                bottom: -7px;
                border-color: transparent transparent #FFFFFF;
            }
            .top-tag {                               
                top: 4px;
                border-color: #FFFFFF transparent transparent;
                opacity: 0.5;
            }
            .bottom-tag-active {
                  bottom: 3px;
            }
            .top-tag-active {
             top: -6px;
           }
        }
        &:hover {
          background-color: rgba(57, 61, 72, 0.7)
        }
       
   }
    .sub-title {
      cursor: pointer;
      line-height: 45px;
      background-color: #333333;
      color: rgba(255, 255, 255, .7);
      .right-tag {
         font-size: 16px;
         margin: 0 8px 0 20px;
      }
      li:hover {
        background-color: rgba(57, 61, 72, 0.7);
        color: #FFFFFF;
      }
    
      
   }

   &:hover::after {
    content: '';
    position: absolute;
    height: 45px;
    width: 5px;
    background-color: #178bc9;
    left: 0;
    top: 0;
   }
   .active {
    background:#1588c7 !important;
    color: #FFFFFF !important;
   }
`