import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Header = styled.header`
  > h1 {
    text-align: center;
    color: var(--gray-900);
    font-size: 1.3rem;
    font-weight: 600;

    margin-bottom: 1rem;
    margin-top: 2rem;
  }
`

export const Container = styled(motion.div)`
  padding: 2rem;
  border-radius: 50px 50px 0 0;
  background: var(--gray-100);
  min-height: 90vh;
`

export const Trace = styled.span`
  display: block;
  width: 1.5rem;
  height: 0.13rem;
  margin: 0 auto 3rem;
  border-radius: 5px;
  background: var(--blue-800);
`

export const Data = styled.section`
  > input {
    :first-of-type,
    :nth-of-type(2) {
      width: 100%;
    }
  }

  input {
    margin-bottom: 2rem;
    border: none;
    background: transparent;
    padding: 0.3rem 0.5rem;
    color: var(--gray-900);
    font-size: 1rem;
    outline: none;
    border-bottom: 2px solid transparent;
    width: 11rem;

    :focus {
      border-color: var(--gray-800);
    }

    ::placeholder {
      color: var(--gray-900);
    }
  }

  > input:first-of-type {
    margin-bottom: 1rem;

    color: var(--blue-800);
    font-size: 1.3rem;

    ::placeholder {
      color: var(--blue-800);
      font-size: 1.3rem;
    }
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 2rem;

    > input {
      margin-bottom: 0;
    }

    > svg {
      margin-right: 1rem;
      width: 20px;
      height: 20px;
    }

    > button {
      background: transparent;
      border: none;
      color: var(--gray-900);
    }
  }
`

export const Category = styled.div`
  > select {
    border: none;
    background: transparent;
    color: var(--gray-900);
    padding: 0.3rem 0.5rem;
    margin-right: 0.5rem;
    outline: none;
    font-size: 0.9rem;
  }

  > form {
    margin-top: 1rem;

    display: ${props => props.formHidden ? 'none' : 'block'};

    transition: display 0.2s;

    > input {
      width: 85%;
    }

    > svg {
      margin-top: 0.2rem;
      color: var(--blue-800);
    }
  }
`

export const Hr = styled.hr`
  border-color: var(--gray-100);
  border-style: solid;
  opacity: 0.3;
`

export const Tasks = styled.ul`
  display: flex;
  align-items: center;

  > span {
    width: 18px;
    height: 18px;
    border-radius: 5px;
    margin-right: 1rem;
    border: 1px solid var(--gray-900);
    background: transparent;
  }

  > input {
    margin-bottom: 0;
  }
`

export const SubmitButton = styled.button`
  background: transparent;
  color: var(--blue-800);
  font-size: 0.9rem;
  border: none;

  font-weight: bold;

  margin-top: 4rem;
  margin-right: 0.8rem;
  float: right;
`
