import styled from '@emotion/styled'
import { ArrowDownCircle as Down } from 'emotion-icons/feather'
import { ArrowUpCircle as Up } from 'emotion-icons/feather'
import { theme } from '../../utils/theme'

export const Arrow = styled(Down).attrs(({ direction, size }) => ({
  as: direction === `up` && Up,
  size,
}))`
  ${({ theme, show, size }) => `
  z-index: 2;
  background: ${theme.darkOrange};
  color: ${theme.white};
  border-radius: 50%;
  transition: ${theme.shortTrans};
  position: fixed;
  bottom: 2.5em;
  opacity: ${show ? 1 : 0};
  visibility: ${show ? `visible` : `hidden`};
  :hover {
    transform: scale(1.15);
    background: ${theme.orange};
  }
  right: calc(1vw - ${size} / 1);`}
`
