import React, { FormEvent, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

// @ts-ignore
import Checkbox from '@bit/altima-assurances.altima-ui-test.ui.checkbox'
import FloatInput from '../../components/form/FloatInput'
import Button from '../../components/form/Button'

import logo from '../../assets/images/logo.svg'
import login from '../../assets/images/backgrounds/login.svg'
import './styles.css'

function Login() {
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [isInputsFilled, setIsInputsFilled] = useState(false)

  function handleInputsChange() {
    const isFilled = Boolean(email && password)
    setIsInputsFilled(isFilled)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    api.post('/users/log-in', { email, password })
      .then(({ data }) => {
        const storage = remember ? localStorage : sessionStorage
        storage.setItem('user', JSON.stringify(data))
        history.push('/')
      })
      .catch(console.error)
  }

  useEffect(handleInputsChange, [email, password])

  return (
    <div id="page-login">
      <div className="container-welcome">
        <img src={login} alt="Background" />

        <div className="welcome">
          <img src={logo} alt="Proffy" />

          <h1>
            Sua plataforma de<br />
            estudos online
          </h1>
        </div>
      </div>

      <div className="form">
        <h2>Fazer login</h2>

        <form>
          <FloatInput
            name="email"
            label="E-mail"
            value={email}
            className="email"
            disableBottomBorder
            onChange={(e) => setEmail(e.target.value)}
          />

          <FloatInput
            name="password"
            label="Senha"
            value={password}
            className="password"
            disableTopBorder
            isPassword
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="remember-me">
            <Checkbox
              value="Lembrar-me"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
          </div>

          <Link
            to="/forgot-my-password"
            className="forgot-password"
          >
            Esqueci minha senha
          </Link>

          <Button
            width="100%"
            className="sign-in"
            disabled={!isInputsFilled}
            onClick={handleSubmit}
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
