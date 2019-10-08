import React from 'react'
import AdSense from 'react-adsense'
import styled from '@emotion/styled'

const AddsSection = styled.div`
  display: flex;
  align-items: center;
`;

const Adds = () => {
  return (
    <AddsSection>
      <div role='note' className='add-block clear-both' itemScope='itemScope' itemType='https://schema.org/WPAdBlock'>
        <AdSense.Google
          client='ca-pub-7655495105068461'
          slot='5601054893'
          style={{ display: 'block' }}
          layout='in-article'
          format='fluid'
        />
      </div>
    </AddsSection>
  )
}

export default Adds

