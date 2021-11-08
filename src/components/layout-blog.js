/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Scroll from './Scroll'
import ScrollDown from './ScrollDown'
import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation"
import Toc from "./Toc"
import "../assets/scss/style.scss"
import Footer from "./footer"
import Theme from "./theme"
import Search from "./search"

const query = graphql`
  query BlogSearchIndexQuery {
    siteSearchIndex {
      index
    }
  }
`

const Layout = ({ data, children, className, props }) => {
  const { siteSearchIndex } = useStaticQuery(query)
  const tableOfContents = data
  return (
    <>
      <div
        sx={{
          display: 'grid',
          minHeight: '100vh',
          gridTemplateAreas: [
            '"header" "nav" "main" "ads" "footer"',
            '"header header header" "nav main ads" "footer footer footer"'
          ],
          gridTemplateColumns: [
            '1fr',
            '200px 1fr 200px'
          ],
          gridTemplateRows: [
            'min-content min-content 1fr min-content min-content',
            'min-content 1fr min-content'
          ]
        }}>
        <div
          sx={{
            gridArea: 'header'
          }}>
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
        </div>
        <div
          sx={{
            gridArea: 'main'
          }}
        >
          <main className={"container " + className}>{children}</main>
          <ScrollDown
            direction='down' to={25}
            showAbove={1500}
            css='position: fixed; right: 1em; top: 4.5em;'
          />
          <Scroll
            showBelow={1500}
            css='position: fixed; right: 1em; bottom: 2em;'
          />
        </div>
        <div
          sx={{
            gridArea: 'nav',
            marginTop: '200px',
            marginLeft: '20px',
          }}>
            Add something
        </div>
        <div
          sx={{
            gridArea: 'ads',
          }}>
            <div
              {...props}
              sx={{
                position: "-webkit-sticky",
                position: "sticky",
              }}
            >
              <Toc />
            </div>
        </div>
        <div
          sx={{
            gridArea: 'footer'
          }}>
            <Footer />
        </div>
      </div>
    </>
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