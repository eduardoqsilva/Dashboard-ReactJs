import styled from "styled-components";

export const GridWrapper = styled.main`

  padding: 1rem;
  max-width: 1500px;
  width: fit-content;

  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: auto auto;
  gap: 1rem;
  grid-template-areas: header;
  margin: auto;
  position: relative;
  z-index: 10;

  & div.ContainerHeader {
    display: flex;
    align-items: flex-start; 
    justify-content: space-between;

    grid-column: span 4;

    color: ${(props) => props.theme.textColor};
    font-family: 'Roboto';

    margin-top: 4rem;
    margin-bottom: 2rem;
  }

  & .titleWrapper > span{
    opacity: 0.5;
  }

  & div .darkSwith {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & div.darkSwith label {
    font-family: 'Roboto';
    font-weight: 400;
    opacity: 0.5;
  }

  & div.darkSwith input[type="checkbox"] { 
    appearance: none;
    width: 60px;
    height: 30px;
    background: #707070;
    border-radius: 20px;
    position: relative;
  }
  & div.darkSwith input[type="checkbox"]::before {
    content: '';
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.headerBackgroundSecundary};

    position: absolute;
    left: 3px;
    top: calc(50% - 12.5px);
    transition: 0.1s ease-in;
  }
  & div.darkSwith input[type="checkbox"]:checked::before {
    left: 33px;
    top: calc(50% - 12.5px);
  }
  & div.darkSwith input[type="checkbox"]:checked{
    background: linear-gradient(90deg, rgba(91,190,255,1) -50%, rgba(68,208,146,1) 100%);
  }

  & div.title {
    grid-column: span 4;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.textColor}
  }

  & div.title > h2 {
    font-family: 'Roboto';
  }
`