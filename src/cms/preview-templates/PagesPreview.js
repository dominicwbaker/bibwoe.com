import React from 'react'
import PropTypes from 'prop-types'
import PagesTemplate from '../../components/PagesTemplate'

const PagesPreview = ({ entry, widgetFor }) => (
  <PagesTemplate
    title={entry.getIn(['data', 'title'])}
    slug={entry.getIn(['data', 'slug'])}
    content={widgetFor('body')}
  />
)

PagesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PagesPreview
