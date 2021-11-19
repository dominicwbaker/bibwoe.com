/** @jsx jsx */
import { jsx } from "theme-ui"

const Header = ({ children }) => (
  <header
    className="site-header"
    itemScope='itemScope' itemType='https://schema.org/WPHeader'
    sx={{
      bg: "siteColor",
    }}
  >
    {children}
  </header>
)

export default Header
