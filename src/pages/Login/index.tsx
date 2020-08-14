import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// @ts-ignore
import Checkbox from '@bit/altima-assurances.altima-ui-test.ui.checkbox'
import FloatInput from '../../components/form/FloatInput'
import Button from '../../components/form/Button'

import logo from '../../assets/images/logo.svg'
import login from '../../assets/images/backgrounds/login.svg'
import './styles.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isInputsFilled, setIsInputsFilled] = useState(false)

  function handleInputsChange() {
    const isFilled = Boolean(email && password)
    setIsInputsFilled(isFilled)
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
            <Checkbox value="Lembrar-me" />
          </div>

          <Link
            to="/forget-my-password"
            className="forgot-password"
          >
            Esqueci minha senha
          </Link>

          <Button
            width="100%"
            className="sign-in"
            disabled={!isInputsFilled}
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
