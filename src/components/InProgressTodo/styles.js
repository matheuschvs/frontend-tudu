import styled from 'styled-components'
import { darken, lighten } from 'polished'

export const Container = styled.li`
  background: ${props => lighten(0.1, props.bgColor)};

  padding: 1.5rem;
  margin-bottom: 1rem;

  border-radius: 10px;

  & + & {
    margin-left: 1rem;
  }

  > a > h3 {
    color: #FFF;
    font-weight: 300;
    margin-bottom: 0.4rem;
      text-transform: capitalize;
  }

  > p {
    font-size: 0.7rem;
    color: ${props => darken(0.2, props.bgColor)};
    
    max-width: 7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    margin-bottom: 1.2rem;
  }

  > b {
    display: inline-block;

    color: ${props => darken(0.2, props.bgColor)};
    font-weight: 600;

    margin-bottom: 0.6rem;
  }
`

export const ProgressBar = styled.div`
  background: #FFF;
  border-radius: 5px;

  height: 0.3rem;

  > div {
    background: ${props => darken(0.2, props.bgColor)};
    width: ${props => props.percent};
    border-radius: 5px;
    height: 0.3rem;
  }
`