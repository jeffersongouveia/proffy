import { Link } from 'react-router-dom'
import React from 'react'

import backIcon from '../../assets/images/icons/back.svg'
import styles from './styles.module.css'

interface BackProps {
  to?: string
  className?: string
  onClick?: React.MouseEventHandler
}

const Back: React.FC<BackProps> = (props) => {
  return (
    <Link
      to={props.to || '/'}
      className={`${styles.link} ${props.className}`}
      onClick={props.onClick}
    >
      <img src={backIcon} alt="Voltar" />
    </Link>
  )
}

export default Back
