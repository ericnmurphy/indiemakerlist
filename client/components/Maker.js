import styled from 'styled-components'
import Project from './Project'

const MakerWrapper = styled.div`
  display: flex;
`

const MakerImage = styled.div`
  width: 10%;
`

const MakerName = styled.div`
  width: 35%;
`

const ProjectsWrapper = styled.div`
  width: 55%;
`

const ProjectsList = styled.ul`
  padding: 0;
`

export default props => {
  const { keyNumber } = props
  const { name, image, url, twitter, followers, projects } = props.data
  return (
    <MakerWrapper key={keyNumber}>
      <MakerImage>
        <img src={image} alt={name} />
      </MakerImage>
      <MakerName>
        <h3>
          <a target="_blank" href={url}>
            {name}
          </a>{' '}
          <span>
            <a target="_blank" href={`https://twitter.com/${twitter}`}>
              @{twitter}
            </a>
          </span>
        </h3>
      </MakerName>
      <div>
        <p>{followers}</p>
      </div>
      <ProjectsWrapper>
        <ProjectsList>
          {projects.map(project => (
            <Project project={project} />
          ))}
        </ProjectsList>
      </ProjectsWrapper>
    </MakerWrapper>
  )
}
