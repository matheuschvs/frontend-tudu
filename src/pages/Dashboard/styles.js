import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  padding: 2rem 1rem;

  margin-bottom: 4.5rem;

  .startHeight {
    min-height: 12.5rem;
  }

  h1 {
    text-align: center;
    color: var(--gray-900);
    font-size: 1.4rem;
    font-weight: 600;

    margin-bottom: 2rem;
  }

  > section {
    > h2 {
      font-size: 1.2rem;
      color: var(--blue-100);
      margin-bottom: 1.2rem;
    }
  }
`

export const Link = styled(RouterLink)`
  display: block;
  color: var(--gray-900);
  text-align: right;
  font-size: 0.8rem;

  margin-bottom: 1rem;
`

export const InProgressTodosList = styled.ul`
  display: flex;

  overflow-x: auto;
`