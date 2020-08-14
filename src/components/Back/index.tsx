import { Link } from 'react-router-dom'
import React, { FC } from 'react'

import backIcon from '../../assets/images/icons/back.svg'
import styles from './styles.module.css'

interface BackProps {
  className?: string
}

const Back: FC<BackProps> = ({ className }) => {
  return (
    <Link
      to="/"
      className={`${styles.link} ${className}`}
    >
      <img src={backIcon} alt="Voltar" />
    </Link>
  )
}

export default Back
