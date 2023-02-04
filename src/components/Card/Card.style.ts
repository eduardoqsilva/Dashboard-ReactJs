import styled from 'styled-components'

interface cardLegend {
  loss: boolean
}
interface cardBorderColor{
  borderColors: [string, string] | [string]
}


export const CardWrapperStyled = styled.section`
 
  width: 18.625rem;
  height: 15rem;
  background-color: ${(props) => props.theme.CardBackground};
  border-radius: 8px;
  color: ${(props) => props.theme.textColor};
  text-align: center;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  
`
export const CardWrapperBorderStyled = styled.div<cardBorderColor>`
  
  width: 100%;
  height: 5px;
  border-radius: 8px 8px 0 0;
  background: ${props => props.borderColors.length <= 1 ? props.borderColors[0] : 
   `linear-gradient(90deg, ${props.borderColors[0]} -50%, ${props.borderColors[1]} 100%)`};

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
  font-weight: 400;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  opacity: 0.7;
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


//--------------------CardResume----------------

export const CardResumeWrapperStyled = styled.section`
  width: 18.625rem;
  height: 8.5rem;
  background-color:  ${(props) => props.theme.CardBackground};
  border-radius: 8px;
  padding: 1.8rem;
  color: ${(props) => props.theme.textColor};
  display: flex;
  justify-content: space-between;


  & div.text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  & div.text span {
    font-family: 'Roboto';
    font-size: 0.8rem;
    opacity: 0.6;
  }
  & div.text h2 {
    font-size: 2rem;
    font-family: 'Roboto';
    line-height: 1;
  }

  & div.legend {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`


