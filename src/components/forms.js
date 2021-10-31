import React, { useState, useEffect } from "react"
import debounce from "lodash.debounce"
import SearchForm from "./searchForm"
import SearchResults from "./searchResults"

const Forms = ({ location }) => {
  const [results, setResults] = useState([])
  const searchQuery = new URLSearchParams(location.search).get("keywords") || ""

  useEffect(() => {
    if (searchQuery && window.__LUNR__) {
      const debouncedSearch = debounce(async () => {
        const lunr = await window.__LUNR__.__loaded
        const refs = lunr.en.index.search(searchQuery)
        const posts = refs.map(({ ref }) => lunr.en.store[ref])

        setResults(posts)
      }, 500)

      debouncedSearch()
    }

    if (!searchQuery) setResults([])
    }, [location.search])
    
  return (
    <div>
      <SearchForm query={searchQuery} />
      <SearchResults query={searchQuery} results={results} />
    </div>
  )
}

export default Forms
