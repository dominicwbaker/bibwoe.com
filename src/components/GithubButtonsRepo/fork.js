import React, { PureComponent } from 'react'
import GitHubButton from 'react-github-btn'

// eslint-disable-next-line valid-typeof
if (typeof window !== undefined) { require('react-github-btn') }

class GitHubButtonFork extends PureComponent {
  render () {
    return (
      <GitHubButton data-size='large' href='https://github.com/donaldboulton/bibwoe.com/fork' data-icon='octicon-repo-forked' data-color-scheme='no-preference: dark; light: dark' data-show-count='true' aria-label='Fork donaldboulton/bibwoe.com on GitHub'>Fork</GitHubButton>
    )
  }
}

export default GitHubButtonFork
