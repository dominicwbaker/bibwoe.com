import globalStyles from "gatsby-theme-document/src/gatsby-plugin-theme-ui"
import merge from "lodash.merge"

export default merge({}, globalStyles, {
  html: {
    scrollbarColor: "linear-gradient(to bottom,#1d1d1d,#171717)",
    scrollbarWidth: "10px",
    background: "#100e17",
    color: "#fff",
    overflowX: "hidden",
  },
  html::-webkit-scrollbar {
    width: "10px",
    height: "10px",
  },
  ::-webkit-scrollbar-thumb {
    background: -webkit-gradient(linear,left top,left bottom,from(#d64000),to(#da1b60));
    background: linear-gradient(to bottom,#1d1d1d,#171717);
    border-radius: 10px;
    -webkit-box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25);
    box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25);
    }
  ::-webkit-scrollbar-track {
    background: linear-gradient(to right,#201c29,#201c29 1px,#100e17 1px,#100e17)
  }
})
  
export default globalStyles;
