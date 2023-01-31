import styled from "styled-components";

export const GridWrapper = styled.main`

  padding: 1rem;
  max-width: 1500px;
  width: fit-content;

  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: 60px auto;
  gap: 1rem;
  grid-template-areas: header;
  margin: auto;

  & div.ContainerHeader {
    display: flex;
    align-items: center; 
    justify-content: space-between;

    grid-column: span 4;
  }
`