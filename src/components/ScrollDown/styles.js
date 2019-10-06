import styled from '@emotion/styled'
import { ArrowDownCircle as Down } from 'emotion-icons/arrow-down-circle'
import { ArrowUpCircle as Up } from 'emotion-icons/feather/arrow-up-circle'
import { theme } from '../../utils/theme'

export const Arrow = styled(Up).attrs(({ direction, size }) => ({
  as: direction === `down` && Down,
  size,
}))`
  ${({ theme, show, size }) => `
  z-index: 2;
  background: ${theme.darkOrange};
  color: ${theme.white};
  border-radius: 50%;
  transition: ${theme.shortTrans};
  position: fixed;
  top: 4.5em;
  opacity: ${show ? 1 : 0};
  visibility: ${show ? `visible` : `hidden`};
  :hover {
    transform: scale(1.15);
    background: ${theme.orange};
  }
  right: calc(1vw - ${size} / 1);`}
`
