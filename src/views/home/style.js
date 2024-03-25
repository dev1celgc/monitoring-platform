import styled from "styled-components";

export const HomeWrapper = styled.div`
height: 100%;
  .home-header {
    width: 100%;
    height: 100px;
    margin-bottom: 5px;
    display: flex;
}
.home-info {
  height: calc(100% - 500px);
  padding: 0 5px;
  margin-top: 12px;
}
.home-info-active {
  height: calc(100% - 112px);
  margin: 0;
}
`