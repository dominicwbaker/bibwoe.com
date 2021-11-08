/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Scroll from './Scroll'
import ScrollDown from './ScrollDown'
import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation"

import "../assets/scss/style.scss"
import Footer from "./footer"
import Theme from "./theme"
import Search from "./search"

const query = graphql`
  query SearchIndexQuery {
    siteSearchIndex {
      index
    }
  }
`

const Layout = ({ children, className, props }) => {
  const { siteSearchIndex } = useStaticQuery(query)

  return (
    <div className="primary-container">
      <Header>
        <Logo />
        <div sx={layoutStyle.nav}>
          <div sx={{ display: ["flex", "flex", "flex", "none"] }}>
            <Search searchIndex={siteSearchIndex.index} />
          </div>
          <Navigation />
        </div>
        <div sx={layoutStyle.appearance}>
          <Search searchIndex={siteSearchIndex.index} />
          <Theme />
        </div>
      </Header>
      <main className={"container " + className}>{children}</main>
      <ScrollDown
        direction='down' to={205}
        showAbove={1500}
        css='position: fixed; right: 1em; top: 4.5em;'
      />
      <Scroll
        showBelow={1500}
        css='position: fixed; right: 1em; bottom: 4em;'
      />
      <Footer />
    </div>
  )
}

export default Layout

const layoutStyle = {
  appearance: {
    display: ["none", "none", "none", "flex"],
    alignItems: "center",
    gap: 4,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
}