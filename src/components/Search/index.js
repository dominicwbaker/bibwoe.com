import React, { useState, useEffect, createRef } from "react"
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults,
} from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"
import { css } from "@emotion/core";
import styled from '@emotion/styled'
import Input from "./Input"
import * as hitComps from "./hitComps"
import { Search } from "emotion-icons/fa-solid/Search"
import { Algolia } from "emotion-icons/fa-brands/Algolia"

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0 ? children : `No results for '${state.query}'`
)

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
)

const useClickOutside = (ref, handler, events) => {
  if (!events) events = [`mousedown`, `touchstart`]
  const detectClickOutside = event =>
    !ref.current.contains(event.target) && handler()
  useEffect(() => {
    for (const event of events)
      document.addEventListener(event, detectClickOutside)
    return () => {
      for (const event of events)
        document.removeEventListener(event, detectClickOutside)
    }
  })
}

export default function Search({ indices, collapse, hitsAsGrid }) {
  const ref = createRef()
  const [query, setQuery] = useState(``)
  const [focus, setFocus] = useState(false)
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )
  useClickOutside(ref, () => setFocus(false))
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      onSearchStateChange={({ query }) => setQuery(query)}
      root={{ Root, props: { ref } }}
    >
      <Input onFocus={() => setFocus(true)} {...{ collapse, focus }} />
      <HitsWrapper show={query.length > 0 && focus} asGrid={hitsAsGrid}>
        {indices.map(({ name, title, hitComp }) => (
          <Index key={name} indexName={name}>
            <header>
              <h3>{title}</h3>
              <Stats />
            </header>
            <Results>
              <Hits hitComponent={hitComps[hitComp](() => setFocus(false))} />
            </Results>
          </Index>
        ))}
        <PoweredBy />
      </HitsWrapper>
    </InstantSearch>
  )
}

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`
export const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
`

const focus = css`
  background: black;
  color: ${p => p.theme.colors.primary};
  cursor: text;
  width: 5em;
  + ${SearchIcon} {
    color: ${p => p.theme.colors.text};
    margin: 0.3em;
  }
`

const collapse = css`
  width: 0;
  cursor: pointer;
  color: ${p => p.theme.colors.text};
  + ${SearchIcon} {
    color: white;
  }
  ${props => props.focus && focus}
  margin-left: ${props => (props.focus ? `-1.6em` : `-1em`)};
  padding-left: ${props => (props.focus ? `1.6em` : `1em`)};
  ::placeholder {
    color: ${p => p.theme.colors.primary};
  }
`

const expand = css`
  background: ${p => p.theme.colors.text};
  width: 6em;
  margin-left: -1.6em;
  padding-left: 1.6em;
  + ${SearchIcon} {
    margin: 0.3em;
  }
`

export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  max-height: 80vh;
  overflow: scroll;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  right: 0;
  top: calc(100% + 0.5em);
  width: 80vw;
  max-width: 30em;
  box-shadow: 0 0 5px 0;
  padding: 0.7em 1em 0.4em;
  background: white;
  border-radius: 5px};
  > * + * {
    padding-top: 1em !important;
    border-top: 2px solid ${p => p.theme.colors.primary};
  }
  li + li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid ${p => p.theme.colors.secondary};
  }
  * {
    margin-top: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  mark {
    color: ${p => p.theme.colors.text};
    background: ${p => p.theme.colors.primary};
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h3 {
      color: ${p => p.theme.colors.text};
      background: ${p => p.theme.colors.primary};
      padding: 0.1em 0.4em;
      border-radius: 5px;
    }
  }
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
`

export const PoweredBy = () => (
  <span css="font-size: 0.6em; text-align: end; padding: 0;">
    Powered by{` `}
    <a href="https://algolia.com">
      <Algolia size="1em" /> Algolia
    </a>
  </span>
)