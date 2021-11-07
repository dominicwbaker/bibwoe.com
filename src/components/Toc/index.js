import { throttle } from 'lodash'
import { Link } from 'gatsby'
import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { RiPagesLine } from "react-icons/ri";
import { useEventListener } from '../../hooks/useEventListener'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

function useLockBodyScroll () {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden'
    // Re-enable scrolling when component unmounts
    return () => document.body.style.overflow = originalStyle
  }, []) // Empty array ensures effect is only run on mount and unmount
}

const accumulateOffsetTop = (el, totalOffset = 0) => {
  while (el) {
    totalOffset += el.offsetTop - el.scrollTop + el.clientTop
    el = el.offsetParent
  }
  return totalOffset
}

export default function Toc ({ headingSelector, getTitle, getDepth, ...rest }) {
  const { throttleTime = 200, tocTitle = `Contents` } = rest
  const [headings, setHeadings] = useState({
    titles: [],
    nodes: [],
    minDepth: 0,
  })
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState()
  const ref = useRef()
  useOnClickOutside(ref, () => setOpen(false))
  useLockBodyScroll()
  useEffect(() => {
    // Fallback to sensible defaults for headingSelector, getTitle and getDepth
    // inside useEffect rather than specifying them as Toc default props to avoid
    // the need for useMemo and useCallback, resp.
    // Otherwise, these would change on every render and since this effect calls
    // setHeadings which triggers a rerender, it would cause an infinite loop.

    const selector =
      headingSelector || Array.from({ length: 6 }, (_, i) => `main h` + (i + 1))
    const nodes = Array.from(document.querySelectorAll(selector))
    const titles = nodes.map(node => ({
      title: getTitle ? getTitle(node) : node.innerText,
      depth: getDepth ? getDepth(node) : Number(node.nodeName[1]),
    }))
    const minDepth = Math.min(...titles.map(h => h.depth))
    setHeadings({ titles, nodes, minDepth })
  }, [headingSelector, getTitle, getDepth])

  const scrollHandler = throttle(() => {
    const { titles, nodes } = headings
    // Offsets need to be recomputed because lazily-loaded
    // content increases offsets as user scrolls down.
    const offsets = nodes.map(el => accumulateOffsetTop(el))
    const activeIndex = offsets.findIndex(
      offset => offset > window.scrollY + 0.8 * window.innerHeight,
    )
    setActive(activeIndex === -1 ? titles.length - 1 : activeIndex - 1)
  }, throttleTime)
  useEventListener(`scroll`, scrollHandler)

  return (
    <>      
      <div
        sx={{
          gridColumnStart: "nav-start",
          gridColumnEnd: "nav-end",
        }}
      >
        <heading>
          <RiPagesLine />
          {tocTitle}          
        </heading>
        <div>
          <nav className='nav-scroll'>
            {headings.titles.map(({ title, depth }, index) => (
              <Link
                key={title}
                className='a'
                active={active === index}
                depth={depth - headings.minDepth}
                onClick={event => {
                  event.preventDefault()
                  setOpen(false)
                  headings.nodes[index].scrollIntoView({
                    behavior: `smooth`,
                    block: `center`,
                  })
                }}
              >
                {title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
