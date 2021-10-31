import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Logo = props => (
  <div>
    <Link to="/">
      <StaticImage src='../../static/assets/android-chrome-46x105.png' alt='PubliusLogic' />
    </Link>
  </div>
)

export default Logo
