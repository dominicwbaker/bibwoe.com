import React from "react"
import "core-js/modules/es.promise"
import "core-js/modules/es.array.iterator"
import Layout from "gatsby-theme-document/src/components/layout"

require('typeface-kaushan-script')
require('typeface-roboto')

export default props => <Layout {...props}>{props.children}</Layout>