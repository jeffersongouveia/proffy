import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

interface StyledButtonProps {
  width?: string
  height?: string
  cursor?: string
  color?: string
  backgroundColor?: string

  hover?: {
    backgroundColor?: string
  }
}

const theme = {
  enabled: {
    cursor: 'pointer',
    color: 'var(--color-title-in-primary)',
    backgroundColor: 'var(--color-secondary)',

    hover: {
      backgroundColor: 'var(--color-secondary-dark)',
    }
  },

  disabled: {
    cursor: 'not-allowed',
    color: 'var(--color-text-complement)',
    backgroundColor: '#DCDCE6',

    hover: {
      backgroundColor: '#DCDCE6',
    }
  },
}

const StyledButton = styled.button<StyledButtonProps>`
  width: ${p => p.width ? p.width : '10rem'};
  height: ${p => p.height ? p.height : '5rem'};
  
  border-radius: 8px;
  border: none;
  cursor: ${p => p.theme.cursor};
  
  font: 600 1.6rem Archivo;
  line-height: 2.6rem;
  text-align: center;
  
  color: ${p => p.theme.color};
  background-color: ${p => p.theme.backgroundColor};
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${p => p.theme.hover?.backgroundColor};
  } 
`

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string
  height?: string
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, disabled, ...rest }) => {
  return (
    <ThemeProvider theme={disabled ? theme.disabled : theme.enabled}>
      <StyledButton {...rest}>
        {children}
      </StyledButton>
    </ThemeProvider>
  )
}

export default Button
