import styled from 'styled-components'

export const Navigation = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;

  > ul {
    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 0.7rem 1rem 2rem;
    
    background: #FFF;
    box-shadow: 0px -9px 11px 0px rgba(0,0,0,0.10);
  
    > a {
      > svg {
        color: var(--blue-800);
        width: 22px;
        height: 22px;
      }
  
      :nth-of-type(3) {
        margin-right: 5rem;
      }
  
      :last-of-type {
        position: absolute;
        right: 2rem;
        margin-top: -0.3rem;
        background: var(--blue-800);
        border-radius: 50%;
        padding: 1rem;
  
        > svg {
          width: 30px;
          height: 30px;
          color: #FFF;
        }
      }
    } 
  }
`