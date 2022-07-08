import styled from 'styled-components'

export const Container = styled.button`
  background: var(--blue-800);
  color: #FFF;
  border-radius: 5px;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;

  border: none;

  & + & {
    margin-top: 1rem;
  }
`