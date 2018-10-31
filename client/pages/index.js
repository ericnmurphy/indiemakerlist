import fetch from 'isomorphic-unfetch'
import Hero from '../components/Hero'
import Maker from '../components/Maker'

const Index = props => (
  <div>
    <Hero />
    <section>
      {props.makers.map((maker, i) => (
        <Maker data={maker} key={i} />
      ))}
    </section>
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
