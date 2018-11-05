import styled from 'styled-components'

const ProjectWrapper = styled.li`
  display: inline-block;
  list-style: none;
`

export default props => {
  const { name, url } = props.project
  return (
    <ProjectWrapper>
      <a target="_blank" href={url}>
        {name}
      </a>
    </ProjectWrapper>
  )
}
