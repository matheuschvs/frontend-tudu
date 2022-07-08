import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  margin-top: 10vh;
  padding: 2rem;
  border-radius: 50px 50px 0 0;
  background: var(--gray-100);
  min-height: 90vh;

  > h1 {
    margin-bottom: 3rem;
  }
`

export const Trace = styled.span`
  display: block;
  width: 1.5rem;
  height: 0.13rem;
  margin: 0 auto 3rem;
  border-radius: 5px;
  background: var(--blue-800);
`