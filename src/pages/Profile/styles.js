import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;

  > header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 15rem;

    background: rgb(26,85,180);
    background: linear-gradient(180deg, rgba(26,85,180,1) 0%, rgba(106,165,255,1) 12%, rgba(235,244,253,1) 78%, rgba(131,148,154,1) 99%);

    > h1 {
      margin-top: 0.3rem;
      font-size: 1.3rem;
    }

    > h2 {
      font-size: 0.9rem;
    }

    > div {
      border-radius: 50%;
      background: var(--gray-100);
      padding: 1rem;

      > svg {
        width: 5rem;
        height: 5rem;
      }
    }
  }

  > h3 {
    color: var(--gray-900);
    margin: 3rem 1rem 0;
    text-align: left;
  }

  > button {
    background: transparent;
    color: red;
    border: none;
  }
`

export const Categories = styled.ul`
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 20rem;

  > li {
    margin-bottom: 1rem;

    > span {
      display: inline-block;
      min-width: 10rem;
      text-align: left;
    }

    > button {
      background: transparent;
      border: none;

      svg {
        vertical-align: middle;
        color: var(--blue-100);
      }
    }
  }
`