import React from 'react'
import { FancyButton, FancyText } from './styles'

const PrettyButton = ({ alertText, buttonText }) => (
  <FancyButton onClick={() => alert(alertText)}>
    <FancyText>{buttonText}</FancyText>
  </FancyButton>
)

export default PrettyButton
