import Project from './Project'

export default props => {
  const { key } = props
  const { name, image, url, twitter, projects } = props.data
  return (
    <div key={key}>
      <img src={image} alt={name} />
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
      <ul>
        {projects.map(project => (
          <Project project={project} />
        ))}
      </ul>
    </div>
  )
}
