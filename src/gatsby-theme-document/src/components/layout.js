import React from "react"
import Layout from "gatsby-theme-document/src/components/layout"

require('typeface-kaushan-script')
require('typeface-roboto')

export default props => <Layout {...props}>{props.children}</Layout>