import React from 'react'

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

  return (
    <div className={`float-input ${className}`}>
      <input
        id={name}
        name={name}
        type="text"
        placeholder=""
        className={noBorders}
        {...rest}
      />

      <label htmlFor={name}>
        {label}
      </label>

      {isPassword && (
        <div className="right-icon">
          <i className="ri-eye-line" />
        </div>
      )}
    </div>
  )
}

export default FloatInput
