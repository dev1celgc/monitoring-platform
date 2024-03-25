import styled from "styled-components";

export const MyButtonWrapper = styled.button.attrs(props => {
    return {
        bgcolor: props.bgcolor || '#FFFFFF',
        size: props.size || 14,
        height: props.height || 35,
        lingheight: props.lineheight || 33
    }
})`
color: #fff;
height: ${props => props.height}px;
line-height: ${props => props.lineheight}px;
padding: 0 15px;
border: none;
border-radius: 3px;
font-size: ${props => props.size}px;
background-color: ${props => props.bgcolor};
cursor: pointer;  
margin: 0 10px;
.text {
    margin: 0 5px;
}
`