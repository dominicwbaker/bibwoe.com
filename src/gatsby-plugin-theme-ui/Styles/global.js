import globalStyles from "gatsby-theme-document/src/gatsby-plugin-theme-ui"
import merge from "lodash.merge"

export default merge({}, globalStyles, {
  html: {
    scrollbarColor: "linear-gradient(to bottom,#1d1d1d,#171717)",
    scrollbarWidth: "10px",
    background: "#1d1d1d",
    color: "#171717",
    overflowX: "hidden",
  },
})
  
export default globalStyles
