import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
`

export const Content = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: center;
  width: 50%;
  margin: 0 auto;
`

export const Title = styled.h2`
  font: 600 3.6rem Poppins;
  line-height: 3.4rem;
  color: var(--color-text-title);
  margin-left: 2px;
`

export const Subtitle = styled.p`
  font: normal 1.6rem Poppins;
  line-height: 2.6rem;
  color: var(--color-text-base);
  margin-left: 2px;
`
