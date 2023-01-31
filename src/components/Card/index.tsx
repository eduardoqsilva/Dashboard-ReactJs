import React from 'react'
import { CardH1Styled, CardIconAndUserStyled, CardLegendText, CardSpanStyled, CardTextWrapper, CardWrapperBorderStyled, CardWrapperStyled } from './Card.style'


export function Card(){

  return(
    <CardWrapperStyled>
      <CardWrapperBorderStyled/>
      <CardIconAndUserStyled>
        <img src="./src/assets/facebook.svg"/>
        <span>@eduodev</span>
      </CardIconAndUserStyled>
      <CardTextWrapper>
        <CardH1Styled>1987</CardH1Styled>
        <CardSpanStyled>followers</CardSpanStyled>
      </CardTextWrapper>
      <CardLegendText>12 Today</CardLegendText>
    </CardWrapperStyled>
  )
}