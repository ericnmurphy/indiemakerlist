import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Maker from '../components/Maker'

const Index = props => (
  <div>
    Hello, world.
    <div>
      {props.makers.map((maker, i) => (
        <Maker data={maker} key={i} />
      ))}
    </div>
  </div>
)

Index.getInitialProps = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/makers/all`)
  const data = await res.json()

  return {
    makers: data,
  }
}

export default Index
