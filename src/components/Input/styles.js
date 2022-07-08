import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  & + & {
    margin-top: 1rem;
  }

  > svg {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
`

export const Field = styled.input`
  width: 100%;
  background: transparent;
  font-weight: 600;
  font-size: 0.9rem;
  border: none;
  border-bottom: 2px solid var(--gray-200);
  padding: 0.5rem 0.2rem;
  outline: none;

  transition: border-color 0.2s;

  &:focus {
    border-color: var(--gray-800);
  }
`