import React from 'react'
import styled from '@emotion/styled'

const AddsSection = styled.div`
  display: flex;
  align-items: center;
  text-align: right
`;

const Adds = () => {
  return (
    <AddsSection role='note' className='add-block clear-both' itemScope='itemScope' itemType='https://schema.org/WPAdBlock'>
        <ins class='adsbygoogle'
           style='display:block'
           data-ad-format='autorelaxed'
           data-ad-client='ca-pub-7655495105068461'
           data-ad-slot='5601054893'
           layout='in-article'
           responsive='true'
           format='fluid'></ins>
        <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    </AddsSection>
  )
}

export default Adds

