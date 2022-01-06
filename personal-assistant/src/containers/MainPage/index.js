import React, { useRef } from 'react'
import PrettyButton from '../../components/PrettyButton'
import { WrapperDiv } from './styles'

const MainPage = () => {
  const myInput = useRef()
  return (
    <WrapperDiv>
      <input ref={myInput}/>
      <PrettyButton buttonText="Click me!!" alertText="thanks for clicking."/>
    </WrapperDiv>
  )
}

export default MainPage