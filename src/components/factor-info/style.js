import styled from "styled-components"

export const FactorInfoWrapper = styled.div.attrs(props => {
    return {
        factorx: props.factorx,
        factory: props.factory,
        size: props.size
    }
})`
width: calc(${props => props.size}% - 10px);
height: 80px;
border: 1px solid rgb(193, 194, 197, .5);
background: #f8f8f8;
display: flex;
margin: 0 10px 10px 0;
&:hover {
    box-shadow:  3px 3px 6px rgba(0,0,0,0.2)
}
.factor-left {
    width: 50px;
    height: 100%;
    line-height: 100%;
    background-color: #47a96c;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 30px;
        height: 30px;
    }
}
.factor-right {
    width: calc(100% - 50px);
    position: relative;
    padding: 15px 10px;
    .search {
        position: absolute;
        font-size: 16px;
        top: 4px;
        right: 4px;
        cursor: pointer;
    }
    .factor-name {
        font-size: 14px;
        font-weight: 700;
        text-align: center;
    }
    .factor-value {
        font-size: 18px;
        color: #04aa29;
        text-align: center;
    }
    .factor-data-search {
        width: 106px;
        height: 152px;
        padding: 10px 0;
        font-size: 14px;
        border: 1px solid rgb(193, 194, 197, .5);
        position: fixed;
        left: ${props => props.factorx}px;
        top: ${props => props.factory - 152}px;
        z-index: 1001;
        background-color: #FFFFFF;
        p {
            padding: 0 10px;
            height: 30px;
            line-height: 30px;
            cursor: pointer;
            &:hover {
                background-color: rgb(193, 194, 197, .6);
            }
        }
        h2 {
            height: 5px;
            border-bottom: 1px solid rgb(193, 194, 197, .5);
            margin-bottom: 5px
        }
    }
}
`