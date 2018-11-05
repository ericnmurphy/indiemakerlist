import styled from 'styled-components'

const TableWrapper = styled.section`
  .maker-vote {
    width: 7.5%;
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
    width: 52.5%;
  }
`

export default props => <TableWrapper>{props.children}</TableWrapper>
