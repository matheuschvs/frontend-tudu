import styled from 'styled-components'
import { lighten, darken } from 'polished'

export const Container = styled.div`
  padding: 0 1rem 4.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    text-align: center;
    color: var(--gray-900);
    font-size: 1.3rem;
    font-weight: 600;

    margin: 2rem 0;
  }

  .rdp {
    margin: 0;
  }

  .rdp-nav {
    display: none;
  }

  .rdp-months {
    padding: 30px;
    background: #FFF;
    box-shadow: 1px 1px 25px 10px rgb(0 0 0 / 10%);
    border-radius: 10px;
  }

  .rdp-caption_label {
    color: var(--blue-100);
    font-family: 'Open-sans', sans-serif;
    text-transform: capitalize;
  }

  .rdp-head_cell span {
    color: var(--gray-800);
    font-size: 0.7rem;
  }

  .rdp-day {
    font-weight: 600;
    color: var(--gray-900);
    font-size: 0.7rem;
  }

  .rdp-day_today {
    background: var(--blue-100);
    width: 25px;
    height: 25px;
  }

  .rdp-head_cell,
  .rdp-cell {
    display: inline-flex;
    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
    font-family: 'Open-sans', sans-serif;
  }

  .has-todo {
    position: relative;

    :after {
      content: '';
      background: var(--blue-800);
      width: 5px;
      height: 5px;
      border-radius: 50%;
      bottom: 5px;
      position: absolute;
    }
  }
`

export const Days = styled.ul`
  margin-top: 2rem;

  > li {
    display: flex;

    > ul {
      width: 100%;

      margin-bottom: 1rem;
    }
  }

`

export const Day = styled.div`
  text-align: center;
  margin-right: 1rem;

  > p {
    font-size: 0.8rem;
    color: var(--gray-900);
    font-weight: 600;
    margin-bottom: 0.2rem;
  }

  > b {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    background: var(--blue-800);
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
`

export const Todo = styled.li`
  background: ${props => lighten(0.1, props.bgColor)};

  margin-bottom: 1rem;
  padding: 1rem;

  width: 100%;

  border-radius: 10px;

  a {
    h3 {
      color: #FFF;
      font-weight: 300;
      margin-bottom: 0.3rem;
      font-size: 0.9rem;
      text-transform: capitalize;
    }
  }

  p {
    font-size: 0.7rem;
    color: ${props => darken(0.2, props.bgColor)};
    
    max-width: 13rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`