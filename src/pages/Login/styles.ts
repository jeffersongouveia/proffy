import styled from 'styled-components'

export const Footer = styled.div`
  position: absolute;
  display: inline-flex;
  justify-content: space-between;
  
  width: 100%;
  bottom: 5rem;
  
  font: normal 1.6rem Poppins;
  line-height: 2.6rem;
  color: var(--color-text-base);
  
  p {
    margin: 0;
  }
  
  a {
    font: 600 1.6rem Poppins;
    color: var(--color-primary);
  }
  
  a:hover {
    color: var(--color-primary-darker);
  }
`

export const Right = styled.p`
  line-height: 2rem;
  color: var(--color-text-complement);
  
  img {
    margin-left: 0.5rem;
    width: 2rem;
    opacity: 0.5;
  }
`
