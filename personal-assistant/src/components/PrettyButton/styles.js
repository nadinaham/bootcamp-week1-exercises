import styled from 'styled-components'

export const FancyButton = styled.button`
  background: #1ED761;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 1s;
  padding: 8px;

  &:hover {
    background: white;
    color: #1ED761
  }
`

export const FancyText = styled.p`
  font-weight: 700;
  transition: color 1s;
  margin: 0;
`
