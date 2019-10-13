import styled from '@emotion/styled'
import React, { Component } from 'react'
import GithubButtonFollow from './follow'
import GithubButtonWatch from './watch'
import GithubButtonStar from './star'
import GithubButtonFork from './fork'

require('@primer/octicons-react')

const Section = styled.div`
  display: flex;
  align-items: right;
`;
class GitHubButtonsRepo extends Component {
  render () {
    return (
      <Section>
          <GithubButtonFollow />
          <GithubButtonWatch />
          <GithubButtonStar />
          <GithubButtonFork />
      </Section>
    )
  }
}

export default GitHubButtonsRepo
