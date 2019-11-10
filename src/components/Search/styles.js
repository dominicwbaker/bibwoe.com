import React from 'react'
import { css } from 'theme-ui'
import styled from '@emotion/styled'
import { Algolia } from 'emotion-icons/fa-brands/Algolia'
import { Search } from 'emotion-icons/fa-solid/Search'

export const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
`

const focus = css`
  background: white;
  color: ${props => props.theme.darkGray};
  cursor: text;
  width: 5em;
  + ${SearchIcon} {
    color: ${props => props.theme.lightGray};
    margin: 0.3em;
  }
`

const collapse = css`
  width: 0;
  cursor: pointer;
  color: ${props => props.theme.lightGray};
  + ${SearchIcon} {
    color: white;
  }
  ${props => props.focus && focus}
  margin-left: ${props => (props.focus ? `-1.6em` : `-1em`)};
  padding-left: ${props => (props.focus ? `1.6em` : `1em`)};
  ::placeholder {
    color: ${props => props.theme.gray};
  }
`

const expand = css`
  background: ${props => props.theme.lightGray};
  width: 6em;
  margin-left: -1.6em;
  padding-left: 1.6em;
  + ${SearchIcon} {
    margin: 0.3em;
  }
`

export const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1em;
  background: transparent;
  transition: ${props => props.theme.shortTrans};
  border-radius: ${props => props.theme.smallBorderRadius};
  ${props => (props.collapse ? collapse : expand)};
`

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`

export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  background: ${props => props.theme.background};
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
  border-radius: ${props => props.theme.smallBorderRadius};
  * {
    margin-top: 0;
  }
  > div {
    padding-top: 0.6em;
  }
  div + div {
    margin-top: 0.6em;
    border-top: 1px solid ${props => props.theme.lightGray};
  }
  mark {
    color: ${props => props.theme.lightOrange};
    background: ${props => props.theme.darkOrange};
  }
  header {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid ${props => props.theme.darkGray};
    h3 {
      color: white;
      background: ${props => props.theme.gray};
      padding: 0.1em 0.4em;
      border-radius: ${props => props.theme.smallBorderRadius};
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

export const PoweredBy = () => (
  <span css="font-size: 0.6em; text-align: end; padding: 0;">
    Powered by{` `}
    <a href="https://algolia.com">
      <Algolia size="1em" /> Algolia
    </a>
  </span>
)
