import styled from 'styled-components'

export const Container = styled.button`
  background: ${props => props.bgColor};
  width: 1.2rem;
  height: 1.2rem;

  border: 2px solid ${props => props.borderColor};
  border-radius: 5px;

  position: relative;

  > svg {
    position: absolute;
    top: -0.5rem;
    left: 0;

    width: 24px;
    height: 24px;

    color: green;
  }
`