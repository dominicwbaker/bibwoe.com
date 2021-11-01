/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { Badge } from 'theme-ui'
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout className="not-found-page">
    <Seo title="Tags Page" />
    <Helmet title={title} />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <h1>Tags</h1>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              <Badge variant="primary">
                {tag.fieldValue}
              </Badge>
              <Badge variant="outline" ml={1}>
                {tag.totalCount}
              </Badge>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)
TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}
export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`