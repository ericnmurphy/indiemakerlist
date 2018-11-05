import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Maker from '../components/Maker'
import Table from '../components/Table'
import TableHead from '../components/TableHead'

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
`

const Index = props => (
  <Wrapper>
    <Hero />
    <Table>
      <TableHead />
      {props.makers.map((maker, i) => (
        <Maker data={maker} keyNumber={i} />
      ))}
    </Table>
  </Wrapper>
)

Index.getInitialProps = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/makers/all`)
  const data = await res.json()

  return {
    makers: data,
  }
}

export default Index
