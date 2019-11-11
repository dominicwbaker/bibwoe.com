import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import styled from '@emotion/styled';
import { SearchIcon } from 'emotion-icons/fa-solid/Search'

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

const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1em;
  background: transparent;
  transition: ${p => p.theme.transition};
  border-radius: 5px;
  ${props => (props.collapse ? collapse : expand)};
`
const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`

