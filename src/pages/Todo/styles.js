import styled from 'styled-components'
import { lighten } from 'polished'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  padding: 3rem 2rem 4.5rem;

  background: ${props => lighten(0.4, props.bgColor || '#FFF')};

  min-height: 100vh;

  transition: background 0.2s;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 2rem;

    > svg {
      color: var(--gray-900);
      width: 22px;
      height: 22px;
    }
  }

  > h1 {
    color: ${props => lighten(0.1, props.bgColor || '#FFF')};
    font-size: 1.5rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }

  > h3 {
    margin-bottom: 2rem;
    font-weight: 600;
    font-size: 0.8rem;
    color: var(--gray-900);
  }
`

export const Info = styled.section`
  display: flex;
  align-items: center;

  font-size: 0.9rem;
  color: var(--gray-800);

  margin-bottom: 2rem;

  > svg {
    margin-right: 1rem;
    width: 20px;
    height: 20px;
  }

  &.files {
    margin-bottom: 1rem;

    > svg {
      transform: rotate(45deg);
    }
  }

  > button {
    background: ${props => lighten(0.1, props.bgColor || '#FFF')};
    padding: 0.2rem 0.5rem;
    color: #FFF;
    border: none;
    border-radius: 10px;
  }
`

export const Users = styled.ul`
  display: flex;
  align-items: center;

  margin-bottom: 2rem;
  
  > li {
    margin-right: 0.5rem;
    background: var(--blue-800);
    text-transform: capitalize;
  }

  > button {
    border: none;
    background: var(--blue-100);
  }

  > li, > button {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    width: 2rem;
    height: 2rem;
  }
`

export const Files = styled.ul`
  list-style: auto;

  margin: 0 0 3rem 1rem;

  > li {
    margin-bottom: 0.3rem;
    font-size: 0.7rem;
  }
`

export const Hr = styled.hr`
  border-color: var(--gray-100);
  border-style: solid;
  opacity: 0.3;
`

export const Tasks = styled.ul`
  margin: 2rem 0 1rem;

  > li {
    margin-bottom: 1rem;

    display: flex;
    align-items: center;

    color: var(--gray-900);
    font-size: 0.9rem;

    > button {
      margin-right: 1rem;
      width: 18px;
      height: 18px;
    }

    > span.done {
      text-decoration: line-through;
    }

    :last-of-type {
      > svg {
        width: 24px;
        height: 24px;
      }

      > button {
        width: unset;
        background: transparent;
        border: none;
        height: unset;
        color: var(--gray-900);
      }
    }
  }
`

export const Comments = styled.section`
  margin-top: 1rem;
  position: relative;

  > input {
    width: 100%;
    border: none;
    padding: 0.3rem 2rem 0.3rem 0.5rem;
    border-radius: 5px;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  > button {
    position: absolute;
    right: 0.5rem;
    top: 0.3rem;
    background: transparent;
    border: none;

    > svg {
      color: var(--blue-800);
    }
  }

  > ul {
    > li {
      margin-bottom: 1rem;
      display: flex;
      align-items: flex-start;

      > div {
        margin-right: 0.5rem;
        background: var(--blue-800);
        text-transform: capitalize;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFF;
        width: 2rem;
        height: 2rem;
      }

      > article {
        > strong {
          font-size: 0.8rem;
          color: var(--gray-900);
        }

        > p {
          font-size: 0.8rem;
          color: var(--gray-800);
          margin-top: 0.5rem;
          max-width: 14rem;
        }
      }
    }
  }
`