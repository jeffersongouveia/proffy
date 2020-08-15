import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "content";
  
  width: 100%;
  height: 100%;
  
  img {
    grid-area: content;
    width: 100%;
    height: 100%;
    background: var(--color-primary);
  }
`

export const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  img {
    width: 12rem;
    height: 12rem;
    margin-bottom: 4rem;
  }
`

export const Title = styled.h1`
  font: bold 5.4rem Archivo;
  line-height: 4.2rem;
  color: var(--color-title-in-primary);
  
  text-align: center;
  margin-bottom: 2.4rem;
`

export const Message = styled.p`
  font: normal 1.6rem Poppins;
  line-height: 2.6rem;
  color: var(--color-text-in-primary);
  
  text-align: center;
  margin-bottom: 8rem;
`
