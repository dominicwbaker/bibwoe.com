import React from "react"
import Search from "./index"
import styled from '@emotion/styled'

const searchIndices = [
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

const SearchHeader = ({ transparent }) => (
  <Root transparent={transparent}>
    <Search collapse indices={searchIndices} />
  </Root>
)

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`

export default SearchHeader