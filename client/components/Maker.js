import styled from 'styled-components'
import Project from './Project'

const MakerWrapper = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
    margin-right: 1rem;
  }
`

const ProjectsList = styled.ul`
  padding: 0;
`

export default props => {
  const { keyNumber } = props
  const { name, image, url, twitter, followers, projects } = props.data
  return (
    <MakerWrapper key={keyNumber}>
      <div className="maker-vote">
        <a>👍</a>
        200
      </div>
      <div className="maker-image">
        <img src={image} alt={name} />
      </div>
      <div className="maker-name">
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
      </div>
      <div className="maker-followers">
        <p>{followers}</p>
      </div>
      <div className="maker-projects">
        <ProjectsList>
          {projects.map((project, i) => (
            <Project project={project} keyNumber={i} />
          ))}
        </ProjectsList>
      </div>
    </MakerWrapper>
  )
}
