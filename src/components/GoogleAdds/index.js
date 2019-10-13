import React from 'react'
import styled from '@emotion/styled'
import Helmet from 'react-helmet'

const AddsSection = styled.div`
  display: flex;
  align-items: center;
`;

const Adds = () => {
  return (
    <Helmet>
      <script async='async' src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script>
    </Helmet>
    <AddsSection>
      <div role='note' className='add-block clear-both' itemScope='itemScope' itemType='https://schema.org/WPAdBlock'>
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
      </div>
    </AddsSection>
  )
}

export default Adds

