import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import Back from '../../components/Back'
import Welcome from '../../components/Welcome'
import FloatInput from '../../components/form/FloatInput'
import Button from '../../components/form/Button'

import { Wrapper, Content, Title, Subtitle } from './styles'
import styles from './styles.module.css'

function SignUp() {
  const history = useHistory()

  const initialUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }
  const [user, setUser] = useState(initialUser)

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const { firstName, lastName, ...rest } = user
    const params = {
      first_name: firstName,
      last_name: lastName,
      ...rest,
    }

    api.post('/users/sign-up', params)
      .then(() => history.push('/sign-up/success'))
      .catch(console.error)
  }

  return (
    <Wrapper>
      <Content>
        <Back className={styles.btnBack} />

        <div>
          <Title>Cadastro</Title>
          <Subtitle>
            Preencha os dados abaixo<br />
            para começar.
          </Subtitle>

          <form>
            <FloatInput
              name="firstName"
              label="Nome"
              disableBottomBorder
              value={user.firstName}
              onChange={handleInput}
            />

            <FloatInput
              name="lastName"
              label="Sobrenome"
              disableTopBorder
              disableBottomBorder
              value={user.lastName}
              onChange={handleInput}
            />

            <FloatInput
              name="email"
              label="E-mail"
              disableTopBorder
              disableBottomBorder
              value={user.email}
              onChange={handleInput}
            />

            <FloatInput
              name="password"
              label="Senha"
              isPassword
              disableTopBorder
              value={user.password}
              onChange={handleInput}
            />

            <Button
              width="100%"
              className={styles.btnSignUp}
              onClick={handleSubmit}
            >
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
