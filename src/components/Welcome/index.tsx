import React from 'react'

import login from '../../assets/images/backgrounds/login.svg'
import logo from '../../assets/images/logo.svg'

import { Wrapper, Message } from './styles'

function Welcome() {
  return (
    <Wrapper>
      <img src={login} alt="Background" />

      <Message>
        <img src={logo} alt="Proffy" />

        <h1>
          Sua plataforma de<br />
          estudos online
        </h1>
      </Message>
    </Wrapper>
  )
}

export default Welcome
