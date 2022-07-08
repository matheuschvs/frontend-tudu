import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Button } from '../../components/Button'

export const Form = styled.form`
  > button:first-of-type {
    margin-top: 3rem;
  }
`

export const GoogleButton = styled(Button)`
  background: #FFF;
  color: var(--gray-800);

  > svg {
    margin-right: 0.5rem;
    vertical-align: middle;
  }
`

export const RegisterLink = styled(Link)`
  display: block;
  text-align: center;
  font-size: 0.8rem;
  color: var(--gray-800);
  font-weight: 300;
  margin-top: 3rem;
`
