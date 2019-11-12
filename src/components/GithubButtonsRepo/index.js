import styled from '@emotion/styled'
import React, { Component } from 'react'
import GithubButtonFollow from './follow'
import GithubButtonWatch from './watch'
import GithubButtonStar from './star'

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
      </Section>
    )
  }
}

export default GitHubButtonsRepo
