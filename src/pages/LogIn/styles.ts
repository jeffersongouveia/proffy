import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--color-background);
  width: 50%;
  margin: 0 auto;
  position: relative;
`

export const Title = styled.h2`
  font: 3.6rem Poppins;
  font-weight: 600;
  line-height: 36px;
  margin-bottom: 4rem;
  width: 100%;
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "email email"
    "password password"
    "remember-me forgot-password"
    "sign-in sign-in";
  align-items: center;
  width: 100%;
`

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
    text-decoration: underline;
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
