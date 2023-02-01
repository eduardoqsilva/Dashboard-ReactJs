import styled from 'styled-components'

interface cardLegend {
  loss: boolean
}


export const CardWrapperStyled = styled.div`
 
  width: 18.625rem;
  height: 15rem;
  background-color: #252b43;
  border-radius: 8px;
  color: #ffff;
  text-align: center;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  
`
export const CardWrapperBorderStyled = styled.div`
  
  width: 100%;
  height: 5px;
  border-radius: 8px 8px 0 0;
  background-color: #188ff7;

  position: absolute;
  top: 0;
`

export const CardIconAndUserStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;

  & span{
    font-family: 'Roboto';
    opacity: 0.5;
  }
`

export const CardH1Styled = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 4.5rem;
  margin: 0;
`
export const CardSpanStyled = styled.span`
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  opacity: 0.5;
  margin-left: 10px;
`
export const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CardLegendText = styled.span<cardLegend>`
  color: ${props => props.loss ? "#bc4d5c"  : "#05cfb4" };
  font-family: 'Roboto';
  font-size: 0.9rem;
  font-weight: bold;

  &::before{
    content: '${props => props.loss ? "▾" : "▴"}';
    display: inline-block;
    margin-right: 3px;
    font-weight: bold;
    font-size: 1rem;
  }
`


