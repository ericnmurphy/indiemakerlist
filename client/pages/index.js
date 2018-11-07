import React from 'react'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import Hero from '../components/Hero'
import Maker from '../components/Maker'
import Table from '../components/Table'
import TableHead from '../components/TableHead'

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
`

class Index extends React.Component {
  state = { user: '' }

  static getInitialProps = async () => {
    const res = await fetch(`${process.env.BACKEND_URL}/api/makers/all`)
    const data = await res.json()

    return {
      makers: data,
    }
  }

  componentDidMount = () => {
    if (!Cookies.get('user')) {
      Cookies.set('user', Date.now(), { expires: 365 })
    }
  }

  render() {
    return (
      <Wrapper>
        <Hero />
        <Table>
          <TableHead />
          {this.props.makers.map((maker, i) => (
            <Maker data={maker} user={this.props.user} key={i} />
          ))}
        </Table>
      </Wrapper>
    )
  }
}

export default Index
