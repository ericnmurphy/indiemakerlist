export default props => {
  const { name, url } = props.project
  return (
    <li>
      <a target="_blank" href={url}>
        {name}
      </a>
    </li>
  )
}
