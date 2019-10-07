import React from 'react'
import CommentForm from './comments'
import GitHubIssues from '../GithubIssues'

class Comments extends React.Component {
  render () {
    return (
      <div>      
            <div>
              <h3>Comments</h3>
              <GitHubIssues />
            </div>
            <div>
                <CommentForm />
              </div>
      </div>
    )
  }
}

export default Comments
