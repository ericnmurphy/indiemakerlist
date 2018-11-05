import styled from 'styled-components'

const ProjectWrapper = styled.li`
  display: inline-block;
  list-style: none;

  a {
    background: #016fb9;
    border-radius: 1rem;
    margin-right: 0.5rem;
    color: #fff;
    padding: 0.175rem 0.75rem;
  }
`

export default props => {
  const { keyNumber } = props
  const { name, url } = props.project
  return (
    <ProjectWrapper key={keyNumber}>
      <a target="_blank" href={url}>
        {name}
      </a>
    </ProjectWrapper>
  )
}
