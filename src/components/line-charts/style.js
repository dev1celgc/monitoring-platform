import styled from "styled-components";

export const LineChartWrapper = styled.div`
   width: calc(33% - 10px);
   height: 300px;
   position: relative;
   .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 5%;
    font-weight: 600;
   }
`