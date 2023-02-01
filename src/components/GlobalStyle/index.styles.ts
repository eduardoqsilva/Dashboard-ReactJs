import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #1d2029;

    &::before{
      content: '';
      width: 100%;
      height: 300px;
      background-color: #20222f;

      position: absolute;
      top: 0;
      border-radius: 0 0 20px 20px;
    }
  }
`