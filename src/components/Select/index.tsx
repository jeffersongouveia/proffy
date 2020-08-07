import React from 'react'

import './styles.css'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
  name: string
  label: string
  options: Array<{
    value: string
    label: string
  }>
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} defaultValue="" {...rest}>
        <option value="" disabled hidden>
          Selecione uma opção
        </option>

        {options.map((i) => {
          return <option key={i.value} value={i.value}>{i.label}</option>
        })}
      </select>
    </div>
  )
}

export default Select
