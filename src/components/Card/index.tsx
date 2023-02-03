import { CardH1Styled, CardIconAndUserStyled,
   CardLegendText, CardSpanStyled,
    CardTextWrapper, CardWrapperBorderStyled,
     CardWrapperStyled, CardResumeWrapperStyled } from './Card.style'

interface CardProps{
  user: string
  iconSrc: string
  numberOf: string
  numberOfLegend: string
  legend: string
  loss: boolean
  borderColors?: [string, string] | [string]
}

interface CardResume{
  loss: boolean
  porcent: string
  iconSrc: string
  textLegend: string;
  number: string
}

export function Card({ user, iconSrc, numberOf,
   numberOfLegend, legend, loss = false, 
   borderColors = ['#188ff7'] }: CardProps) {

  return(
    <CardWrapperStyled>
      <CardWrapperBorderStyled borderColors={borderColors}/>
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

export function CardResume({loss, porcent, iconSrc, textLegend, number}:CardResume) {
  return(
    <CardResumeWrapperStyled>
      <div className='text'>
        <span>{textLegend}</span>
        <h2>{number}</h2>
      </div>
      <div className='legend'>
        <img src={iconSrc}/>
        <CardLegendText loss={loss}>{porcent}</CardLegendText>
      </div>
    </CardResumeWrapperStyled>
  )
}