import React from "react"
import { Root } from "./styles"
import Search from "./SearchForm"

const searchIndices = [
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

const SearchHeader = ({ transparent }) => (
  <Root transparent={transparent}>
    <Search collapse indices={searchIndices} />
  </Root>
)

export default SearchHeader