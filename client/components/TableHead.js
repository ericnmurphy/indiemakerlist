import styled from 'styled-components'

const MakerWrapper = styled.div`
  display: flex;

  div {
    margin-right: 1rem;
  }
`

export default () => (
  <MakerWrapper>
    <div className="maker-vote">
      <h4>Popularity</h4>
    </div>
    <div className="maker-image">
      <h4>Name</h4>
    </div>
    <div className="maker-name">
      <h4> </h4>
    </div>
    <div className="maker-followers">
      <h4>Followers</h4>
    </div>
    <div className="maker-projects">
      <h4>Currently working on</h4>
    </div>
  </MakerWrapper>
)
