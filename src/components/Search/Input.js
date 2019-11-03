import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import styled from '@emotion/styled'

export default connectSearchBox(({ refine, ...rest }) => (
  <Form>
    <Input
      type="text"
      placeholder="Search"
      aria-label="Search"
      onChange={e => refine(e.target.value)}
      {...rest}
    />
    <SearchIcon />
  </Form>
))

export const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1em;
  background: transparent;
  transition: color ${p => p.theme.transition};
  border-radius: 5px;
  {highlight-next-line}
  ${props => (props.collapse ? collapse : expand)};
`
export const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
`
export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`
