import React from 'react'

import FloatInput from '../../components/form/FloatInput'

import logo from '../../assets/images/logo.svg'
import login from '../../assets/images/backgrounds/login.svg'
import './styles.css'

function Login() {
  return (
    <div id="page-login">
      <div className="container-welcome">
        <img src={login} alt="Background" />

        <div className="welcome">
          <img src={logo} alt="Proffy" />

          <h1>
            Sua plataforma de<br/>
            estudos online
          </h1>
        </div>
      </div>

      <div className="form">
        <h2>Fazer login</h2>

        <form>
          <FloatInput name="email" label="E-mail" />
          <FloatInput name="password" label="Senha" type="password" />
          <input type="checkbox" />
        </form>
      </div>
    </div>
  )
}

export default Login
