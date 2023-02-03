import styled from "styled-components";


export const HeaderContainer = styled.header`
  width: 100vw;
  height: 100vh;

  background-color: #1d2029;
  color: #fff;

  &::before{
    content: '';
    width: 100%;
    height: 300px;
    background-color: #20222f;

    position: absolute;
    top: 0;
    border-radius: 0 0 20px 20px;
  }
`


