import algoliasearch from 'algoliasearch/lite'
import React, { createRef, useMemo, useState } from 'react'
import { connectStateResults, Index, InstantSearch } from 'react-instantsearch-dom'
import { useOnClickOutside } from './useOnClickOutside'
import Hits from './Hits'
import Input from './Input'
import { Algolia } from 'emotion-icons/fa-brands/Algolia'
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Results = connectStateResults(
  ({ searching, searchState: state, searchResults: res }) =>
    (searching && <div>Searching...</div>) ||
    (res && res.nbHits === 0 && <div>No results for &apos;{state.query}&apos;</div>)
)

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
)

export default function Search({ indices, collapse, hitsAsGrid }) {
  const ref = createRef()
  const [query, setQuery] = useState(``)
  const [focus, setFocus] = useState(false)
  const appId = process.env.GATSBY_ALGOLIA_APP_ID
  const searchKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY
  // useMemo prevents the searchClient from being recreated on every render.
  // Avoids unnecessary XHR requests (see https://tinyurl.com/yyj93r2s).
  const searchClient = useMemo(() => algoliasearch(appId, searchKey), [
    appId,
    searchKey,
  ])
  useOnClickOutside(ref, () => setFocus(false))
  return (
    <Root ref={ref}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <SearchIconDiv>
          <Input onFocus={() => setFocus(true)} {...{ collapse, focus }} />
        </SearchIconDiv>
        <HitsWrapper show={query.length > 0 && focus} asGrid={hitsAsGrid}>
          {indices.map(({ name, title, type }) => (
            <Index key={name} indexName={name}>
              <header>
                <h3>{title}</h3>
                <Stats />
              </header>
              <Results />
              <Hits type={type} onClick={() => setFocus(false)} />
            </Index>
          ))}
          <PoweredBy />
        </HitsWrapper>
      </InstantSearch>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
  color: ${p => p.theme.textColor};
`
const SearchIconDiv = styled.div`
  width: 1em;
  pointer-events: none;
`
const focus = css`
  background: white;
  color: ${p => p.theme.colors.text};
  cursor: text;
  width: 5em;
  + ${SearchIconDiv} {
    color: ${p => p.theme.colors.text};
    margin: 0.3em;
  }
`
const collapse = css`
  width: 0;
  cursor: pointer;
  color: ${p => p.theme.colors.text};
  + ${SearchIconDiv} {
    color: white;
  }
  ${props => props.focus && focus}
  margin-left: ${props => (props.focus ? `-1.6em` : `-1em`)};
  padding-left: ${props => (props.focus ? `1.6em` : `1em`)};
  ::placeholder {
    color: ${p => p.theme.colors.text};
  }
`
const expand = css`
  background: ${p => p.theme.colors.background};
  width: 6em;
  margin-left: -1.6em;
  padding-left: 1.6em;
  + ${SearchIconDiv} {
    margin: 0.3em;
  }
`
const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  background: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.text};
  max-height: 80vh;
  overflow: scroll;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  right: 0;
  top: calc(100% + 0.5em);
  width: 80vw;
  max-width: 30em;
  box-shadow: 0 0 5px 0 black;
  padding: 0.7em 1em 0.4em;
  border-radius: 5px;
  * {
    margin-top: 0;
  }
  > div {
    padding-top: 0.6em;
  }
  div + div {
    margin-top: 0.6em;
    border-top: 1px solid ${p => p.theme.colors.borderColor};
  }
  mark {
    color: ${p => p.theme.colors.text};
    background: ${p => p.theme.colors.background};
  }
  header {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid ${p => p.theme.colors.borderColor};
    h3 {
      color: ${p => p.theme.colors.text};
      background: ${p => p.theme.colors.background};
      padding: 0.1em 0.4em;
      border-radius: 3px;
      margin-bottom: 0.3em;
    }
  }
  * + header {
    padding-top: 1em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
`
const PoweredBy = () => (
  <span css="font-size: 0.6em; text-align: end; padding: 0;">
    Powered by{` `}
    <a href="https://algolia.com">
      <Algolia size="1em" /> Algolia
    </a>
  </span>
)