import React from 'react'
import { useHistory } from 'react-router-dom'

import successBackground from '../../assets/images/backgrounds/success.svg'
import successCheck from '../../assets/images/icons/success-check-icon.svg'

import { Wrapper, Content, Title, Message } from './styles'
import Button from '../../components/form/Button'

function Success() {
  const history = useHistory()

  function toLoginPage() {
    history.push('/login')
  }

  return (
    <Wrapper>
      <img src={successBackground} alt="Background" />

      <Content>
        <img src={successCheck} alt="Success" />

        <Title>
          Cadastro concluído
        </Title>

        <Message>
          Agora você faz parte da plataforma da Proffy.<br/>
          Tenha uma ótima experiência.
        </Message>

        <Button width="16rem" onClick={toLoginPage}>
          Fazer login
        </Button>
      </Content>
    </Wrapper>
  )
}

export default Success
