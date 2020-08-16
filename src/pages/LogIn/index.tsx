import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import api from '../../services/api'

// @ts-ignore
import Checkbox from '@bit/altima-assurances.altima-ui-test.ui.checkbox'
import Welcome from '../../components/Welcome'
import FloatInput from '../../components/form/FloatInput'
import Button from '../../components/form/Button'

import heart from '../../assets/images/icons/purple-heart.svg'

import { Footer, Right } from './styles'
import styles from './styles.module.css'
import './styles.css'

function LogIn() {
  const history = useHistory()

  const [showAnimation, setShowAnimation] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [isInputsFilled, setIsInputsFilled] = useState(false)

  function handleInputsChange() {
    const isFilled = Boolean(email && password)
    setIsInputsFilled(isFilled)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    api.post('/users/log-in', { email, password })
      .then(({ data }) => {
        const storage = remember ? localStorage : sessionStorage
        storage.setItem('user', JSON.stringify(data))
        history.push('/')
      })
      .catch(console.error)
  }

  function handleSignUp() {
    sessionStorage.setItem('from', window.location.pathname)
    history.push('/sign-up')
  }

  function checkAnimationTrigger() {
    const isFromSignUp = sessionStorage.getItem('from') === '/sign-up'
    setShowAnimation(isFromSignUp)
    sessionStorage.removeItem('from')
  }

  useEffect(checkAnimationTrigger, [])
  useEffect(handleInputsChange, [email, password])

  return (
    <div id="page-login">
      <CSSTransition
        in={showAnimation}
        timeout={900}
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
        }}
      >
        <div className="container-welcome">
          <Welcome />
        </div>
      </CSSTransition>

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

          <Footer>
            <p>
              Não tem conta?<br />

              <a onClick={handleSignUp}>
                Cadastre-se
              </a>
            </p>

            <Right>
              É de graça <img src={heart} alt="S2" />
            </Right>
          </Footer>
        </form>
      </div>
    </div>
  )
}

export default LogIn
