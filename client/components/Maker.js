export default props => {
  const { key } = props
  const { name, twitter, projects } = props.data
  return (
    <div key={key}>
      <h3>
        {name}{' '}
        <span>
          <a target="_blank" href={`https://twitter.com/${twitter}`}>
            @{twitter}
          </a>
        </span>
      </h3>
      <ul>
        {projects.map(project => (
          <li>
            <a target="_blank" href={project.url}>
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
