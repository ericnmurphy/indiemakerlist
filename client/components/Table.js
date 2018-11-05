import styled from 'styled-components'

const TableWrapper = styled.section`
  .maker-vote {
    width: 10%;

    a {
      font-size: 1em;
      border: 1px solid #aaa;
      border-radius: 2rem;
      width: 1.75rem;
      height: 1.75rem;
      text-align: center;
      margin-right: 0.5rem;
      cursor: pointer;
      transition: background 200ms ease-in-out, border 200ms ease-in-out;

      &:hover {
        background: #60d394;
        border: 1px solid #60d394;
      }
    }
  }

  .maker-image {
    width: 5%;

    img {
      border-radius: 50%;
    }
  }

  .maker-name {
    width: 27.5%;

    h3 {
      font-size: 1em;

      span {
        font-weight: 300;
      }
    }
  }

  .maker-followers {
    width: 7.5%;
  }

  .maker-projects {
    width: 50%;
  }
`

export default props => <TableWrapper>{props.children}</TableWrapper>
