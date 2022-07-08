import styled from 'styled-components'
import { darken, lighten } from 'polished'
import { motion } from 'framer-motion'

export const Container = styled(motion.li)`
  background: ${props => lighten(0.1, props.bgColor)};

  padding: 0.8rem 1.5rem;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;

  border-radius: 10px;

  > div {
    margin-left: 1rem;

    > a > h3 {
      color: #FFF;
      font-weight: 300;
      margin-bottom: 0.3rem;
      font-size: 0.9rem;
      text-transform: capitalize;
    }

    > p {
      font-size: 0.7rem;
      color: ${props => darken(0.2, props.bgColor)};
      
      max-width: 13rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`