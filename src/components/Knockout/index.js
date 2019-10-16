import React from 'react'
import { ThemeProvider } from '@emotion/styled'
import theme from './styles.css'

require('typeface-bowlby-one-sc')

const Knockout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <div className='knockout'>
            <svg className='knockout-text-container' width='100%' height='100%'>
              <rect className='knockout-text-bg' width='110%' height='100%' fill='#d64000' x='0' y='0' fillOpacity='1' mask='url(#knockout-text)' />
              <mask id='knockout-text'>
                <rect width='100%' height='100%' fill='#fff' x='0' y='0' />
                <text x='50%' y='175' fill='#d64000' textAnchor='middle'>404: NOT FOUND</text>
              </mask>
            </svg>
          </div>
        </>
      </ThemeProvider>
    </>
  )
}

export default Knockout
