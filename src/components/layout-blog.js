/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Transition } from "react-spring/renderprops"
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

const Layout = ({ location, children, className, props }) => {
  const { siteSearchIndex } = useStaticQuery(query)

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
          <Transition
            config={{ duration: 500, delay: 200 }}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {() => style => <main className={"container " + className}>{children}</main>}
          </Transition>
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
            marginLeft: '20px'
          }}>
            <Toc headings={headings} />
        </div>
        <div
          sx={{
            gridArea: 'ads',
            marginTop: '200px',
            marginRight: '20px'
          }}>
          Ads some adds would be ok
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