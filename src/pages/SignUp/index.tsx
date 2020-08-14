import React from 'react'

import Back from '../../components/Back'
import Welcome from '../../components/Welcome'
import FloatInput from '../../components/form/FloatInput'
import Button from '../../components/form/Button'

import { Wrapper, Content, Title, Subtitle } from './styles'
import styles from './styles.module.css'

function SignUp() {
  return (
    <Wrapper>
      <Content>
        <Back className={styles.btnBack} />

        <div>
          <Title>Cadastro</Title>
          <Subtitle>
            Preencha os dados abaixo<br/>
            para começar.
          </Subtitle>

          <form>
            <FloatInput
              name="first_name"
              label="Nome"
              disableBottomBorder
            />

            <FloatInput
              name="last_name"
              label="Sobrenome"
              disableTopBorder
              disableBottomBorder
            />

            <FloatInput
              name="email"
              label="E-mail"
              disableTopBorder
              disableBottomBorder
            />

            <FloatInput
              name="password"
              label="Senha"
              isPassword
              disableTopBorder
            />

            <Button width="100%" className={styles.btnSignUp}>
              Concluir cadastro
            </Button>
          </form>
        </div>
      </Content>

      <Welcome />
    </Wrapper>
  )
}

export default SignUp
