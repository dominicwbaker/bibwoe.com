/** @jsx jsx */
import { jsx } from "theme-ui"
import { RiHeart2Line } from "@react-icons/all-files/ri/RiHeart2Line"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Footer = () => (
  <footer
    className="site-footer"
    itemScope='itemScope' itemType='https://schema.org/WPFooter'
    sx={{
      bg: "siteColor",
    }}
  >
    <div>
      <p>
      © {new Date().getFullYear()} Bibwoe.com{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        <OutboundLink to="/">Basic Instructions Books While On Earth</OutboundLink>
      </p>
    </div>
  </footer>
)

export default Footer
