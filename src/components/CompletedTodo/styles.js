import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.li`
  background: var(--gray-100);

  padding: 0.8rem 1.5rem;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;

  border-radius: 10px;

  > div {
    margin-left: 1rem;

    > a > h3 {
      color: #000;
      font-weight: 400;
      font-size: 0.9rem;
      margin-bottom: 0.3rem;
      text-transform: capitalize;
    }

    > p {
      font-size: 0.7rem;
      color: ${props => darken(0.2, '#EBF4FD')};
      
      max-width: 13rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`