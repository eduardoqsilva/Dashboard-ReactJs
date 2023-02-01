import { CardH1Styled, CardIconAndUserStyled,
   CardLegendText, CardSpanStyled,
    CardTextWrapper, CardWrapperBorderStyled,
     CardWrapperStyled } from './Card.style'

interface CardProps{
  user: string
  iconSrc: string
  numberOf: string
  numberOfLegend: string
  legend: string
  loss: boolean
}

export function Card({ user, iconSrc, numberOf, numberOfLegend, legend, loss}: CardProps){

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
      <CardLegendText loss={loss}>{legend}</CardLegendText>
    </CardWrapperStyled>
  )
}