import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 'welcome';
  place-items: center;

  background: var(--color-primary);
  
  img {
    grid-area: welcome;
  }
`

export const Message = styled.div`
  grid-area: welcome;
  
  h1 {
    color: var(--color-text-in-primary);
    line-height: 4rem;
    font-weight: normal;
  }
`
