import { CardH1Styled, CardIconAndUserStyled,
   CardLegendText, CardSpanStyled,
    CardTextWrapper, CardWrapperBorderStyled,
     CardWrapperStyled } from './Card.style'

interface CardProps{
  user: string
  iconSrc: string
  numberOf: number
  numberOfLegend: string
  legend: string
}

export function Card({ user, iconSrc, numberOf, numberOfLegend, legend}: CardProps){

  return(
    <CardWrapperStyled>
      <CardWrapperBorderStyled/>
      <CardIconAndUserStyled>
        <img src={iconSrc}/>
        <span>{user}</span>
      </CardIconAndUserStyled>
      <CardTextWrapper>
        <CardH1Styled>{numberOf}</CardH1Styled>
        <CardSpanStyled>{numberOfLegend}</CardSpanStyled>
      </CardTextWrapper>
      <CardLegendText>{legend}</CardLegendText>
    </CardWrapperStyled>
  )
}