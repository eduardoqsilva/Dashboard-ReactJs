import styled from "styled-components";


export const HeaderContainer = styled.header`
  width: 100vw;
  height: 100vh;

  background-color: ${(props) => props.theme.headerBackground};
  color: #fff;

  &::before{
    content: '';
    width: 100%;
    height: 300px;
    background-color:${(props) => props.theme.headerBackgroundSecundary};

    position: absolute;
    top: 0;
    border-radius: 0 0 20px 20px;
  }
`


