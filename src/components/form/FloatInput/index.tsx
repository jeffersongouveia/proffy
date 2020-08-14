import React, { useEffect, useState } from 'react'

import './styles.css'

interface FloatInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  className?: string
  disableTopBorder?: boolean
  disableBottomBorder?: boolean
  isPassword?: boolean
}

const FloatInput: React.FC<FloatInputProps> = (props) => {
  const { name, label, className, disableTopBorder, disableBottomBorder, isPassword, ...rest } = props

  const noTopBorderClass = disableTopBorder ? 'no-top-border' : ''
  const noBottomBorderClass = disableBottomBorder ? 'no-bottom-border' : ''
  const noBorders = `${noTopBorderClass} ${noBottomBorderClass}`.trim()

  const [showPassword, setShowPassword] = useState(false)

  const initialType = isPassword && !showPassword ? 'password' : props.type || 'text'
  const [inputType, setInputType] = useState(initialType)

  function handleTogglePassword() {
    if (isPassword && !showPassword) {
      setInputType('password')
    } else {
      setInputType(props.type || 'text')
    }
  }

  useEffect(handleTogglePassword, [showPassword])

  return (
    <div className={`float-input ${className}`}>
      <input
        id={name}
        name={name}
        type={inputType}
        placeholder=""
        className={noBorders}
        {...rest}
      />

      <label htmlFor={name}>
        {label}
      </label>

      {isPassword && (
        <div className="right-icon" onClick={() => setShowPassword(!showPassword)}>
          <i className={showPassword ? 'ri-eye-off-line' : 'ri-eye-line'} />
        </div>
      )}
    </div>
  )
}

export default FloatInput
