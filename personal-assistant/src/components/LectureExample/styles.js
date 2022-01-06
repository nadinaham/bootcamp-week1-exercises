import styled from 'styled-components'

export const InvisibleDude = styled.div`
  /* opacity: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 700px;
  transition: width 1.5s ease-out;


  &:hover {
    width: 300px;
  }
`

export const StyledDiv = styled.div`
  background-color: #BFDDE5;
  width: 100%;
  height: 100vh;
`

export const PrettyParagraph = styled.p`
  margin: 0;
  font-size: 30px;
  color: purple;
`

