/** @jsx jsx */
import { jsx } from "theme-ui"
import Highlighter from "react-highlight-words"

const SearchResults = ({ query, results }) => (
  <section aria-label="Search results for all posts">
    {!!results.length && query && (
      <h2
        id="search-results-count"
        aria-live="assertive"
      >
        Found {results.length} posts on "{query}"
      </h2>
    )}
    {!!results.length && (
      <ul sx={searchResultsStyle.searchResults}>
        {results.map(({ title, url, date, description }) => (
          <li key={title}>
            <h3>
              <a href={url}>
                <Highlighter
                  searchWords={[query]}
                  autoEscape={true}
                  textToHighlight={title}
                />
              </a>
            </h3>
            <small>{new Date(date).toLocaleString("en-GB")}</small>
            {description && (
              <p>
                <Highlighter
                  searchWords={[query]}
                  autoEscape={true}
                  textToHighlight={description}
                />
              </p>
            )}
          </li>
        ))}
      </ul>
    )}
  </section>
)

export default SearchResults

const searchResultsStyle = {
  searchResults: {
    borderRadius: "0 0 6px 6px",
  },
  searchField: {
    zIndex: "11111",
    button: {
      p: 0,
      fontSize: "25px",
      bg: "transparent",
      border: "none",
      display: "flex",
      alignItems: "center",
      color: "#fff",
      cursor: "pointer",
    },
    position: ["none", "relative"],
    ".search-container": {
      display: "none",
      position: "absolute",
      top: ["85px", "55px", "55px", "60px"],
      borderRadius: "12px",
      width: ["100%", "auto"],
      zIndex: "1111",
      textAlign: "center",
      overflow: "hidden",
      boxShadow:
        "0px 0px 50px 0px rgba(0,0,0,.1), 0px 0px 1px 1px rgba(0,0,0,.1)",
    },
    ".search-input": {
      bg: "#fff",
      color: "#000",
      borderRadius: "0",
      boxShadow: "none",
      border: "none",
    },
    ".search": {
      cursor: "pointer",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      "&:hover, &:focus": {
        color: "rgba(255, 255, 255, 0.8)",
      },
      "&.is-active": {
        color: "rgba(255, 255, 255, 0.8)",
        position: "relative",
        zIndex: 1112,
        "+ .search-container": {
          display: ["block"],
          position: "absolute",
          right: 0,
          animation: "animation 0.3s",
          transition: "linear transform .3s",
          transformOrigin: "top right",
          transform: "scale(1)",
          opacity: 1,
          "@keyframes animation": {
            "0%": {
              opacity: 0,
              transform: "scale(0)",
            },
            "50%": {
              transform: "scale(1)",
            },
            "100%": {
              opacity: 1,
              transform: "scale(1)",
            },
          },
          input: {
            width: ["100%", "300px"],
            maxWidth: "100",
            outline: "none",
            fontSize: "16px",
            p: 3,
            borderBottom: "1px solid #eee",
          },
          ul: {
            display: "block",
            bg: "#fff",
            pl: 0,
            m: 0,
          },
          "ul > li": {
            listStyle: "none",
            textAlign: "left",
            marginLeft: "10px",
          },
          "ul > li > a": {
            display: "block",
            color: "#000",
            p: 3,
            "&:hover": {
              color: "#9b9b9b",
            },
          },
        },
      },
    },
  },
}