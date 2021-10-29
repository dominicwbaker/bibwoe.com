import React from 'react'
import PropTypes from 'prop-types'
import PostsPageTemplate from '../../components/PostsPageTemplate'

const PostsPreview = ({ entry, widgetFor }) => {
  return (
    <PostsPageTemplate
      title={entry.getIn(['data', 'title'])}
      featuredImage={entry.getIn(['data', 'featuredImage'])}
      date={entry.getIn(['data', 'datetime'])}
      description={entry.getIn(['data', 'description'])}
      slug={entry.getIn(['data', 'slug'])}
      content={widgetFor('body')}
    />
  )
}

PostsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PostsPreview
