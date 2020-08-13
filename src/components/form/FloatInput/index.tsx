import React from 'react'

import './styles.css'

interface FloatInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  name: string
  label: string
}

const FloatInput: React.FC<FloatInputProps> = ({ name, label, ...rest }) => {
  return (
    <div className="float-input">
      <input id={name} name={name} type="text" placeholder="" {...rest} />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default FloatInput
