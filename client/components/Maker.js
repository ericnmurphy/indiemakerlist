import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Cookies from 'js-cookie'
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

export default class Maker extends React.Component {
  upvote = e => {
    e.preventDefault()

    const { _id } = this.props.data

    axios
      .post(`${process.env.BACKEND_URL}/api/makers/like/${_id}`, {
        user: Cookies.get('user'),
      })
      .then(response => {
        return response
      })
  }

  render() {
    const {
      _id,
      name,
      image,
      url,
      twitter,
      followers,
      projects,
      votes,
    } = this.props.data
    return (
      <MakerWrapper>
        <div className="maker-vote">
          <a onClick={this.upvote}>👍</a>
          {votes.length}
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
              <Project project={project} key={i} />
            ))}
          </ProjectsList>
        </div>
      </MakerWrapper>
    )
  }
}
