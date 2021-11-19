/** @jsx jsx */
import { jsx } from "theme-ui"

const Header = ({ children }) => (
  <div itemscope itemtype="https://schema.org/WebPage">
    <header
      className="site-header"
      itemScope='itemScope' itemType='https://schema.org/WPHeader'
      sx={{
        bg: "siteColor",
      }}
    >
      {children}
    </header>
  </div>
)

export default Header
