import styled from '@emotion/styled'
import { BsArrowUpCircle as Up } from 'react-icons/bs'

export const Arrow = styled(Up)`
  z-index: 2;
  background: transparent;
  color: #777;
  border-radius: 50%;
  transition: 0.3s;
  position: fixed;
  bottom: 10vh;
  :hover {
    transition: 0.3s;
    background: transparent;
  }
  right: calc(1.8vw - 1em / 1);
`
