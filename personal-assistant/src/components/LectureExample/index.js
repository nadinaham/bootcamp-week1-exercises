import React from 'react'
import { StyledDiv, PrettyParagraph, InvisibleDude } from './styles'

const LectureExample = ({ text }) =>
    <StyledDiv>
      <PrettyParagraph>
        {text}
      </PrettyParagraph>
    </StyledDiv>

export default LectureExample