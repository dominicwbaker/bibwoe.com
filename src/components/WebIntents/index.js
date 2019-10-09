import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled'
import { Twitter } from 'emotion-icons/fa-brands/Twitter'

const socialQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            title
            name
            siteUrl
            description
            social {
              name
              url
            }
          }
        }
      }
    }
  }
`;

const TwitterSection = styled.div`
  display: flex;
  align-items: center;
`;

const WebIntents = ({ title, description, url, pathname }) => {
  const results = useStaticQuery(socialQuery);
  const site = results.allSite.edges[0].node.siteMetadata;
  const twitter = site.social.find(option => option.name === 'twitter') || {};
  const fullURL = path => (path ? `${site.siteUrl}${path}` : site.siteUrl);

  // const pageTitle = title ? `${title} | ${site.title}` : site.title;
  const pageTitle = title || site.title;

  return (
    <TwitterSection>
      <span>
      <a
        itemProp='url'
        rel='me'
        title={pageTitle}
        key={tweet_id}
        url='fullURL(pathname)'
        data-screen-name={twitter}
        data-show-count='true'
        data-screen-data-show-count='true'
        className='twitter-share-button'
        href='https://twitter.com/intent/tweet?via=donboulton?ref_src=twsrc%5Etfw'>
        <span>
          <Twitter size='14' color='#1b95e0' />
        </span>
        <span>&nbsp;Tweet</span>
      </a>
      </span>
      <span>
      <a
        itemProp='url'
        rel='no-follow'
        target='_blank'
        data-screen-name={twitter}
        data-screen-data-show-count='true'
        data-show-count='true'
        title={pageTitle}
        key={fullURL}
        url='fullURL(pathname)'
        className='twitter-follow-button'
        data-related='donboulton'
        data-show-screen-name='false'
        href='https://twitter.com/donboulton?ref_src=twsrc%5Etfw'
        >
        <span>
          <Twitter size='14' color='#1b95e0' />
        </span>
        <span>&nbsp;Follow</span>
      </a>
      </span>
    <span>
      <a
        itemProp='url'
        rel='no-follow'
        aria-label='Message'
        title={pageTitle}
        key={fullURL}
        url='fullURL(pathname)'
        href='https://twitter.com/messages/compose?recipient_id=105217183'
        className='twitter-dm-button'
        data-screen-name={twitter}
        data-show-count='true'
        target='_blank'
      >
        <span>
          <Twitter size='14' color='#1b95e0' />
        </span>
          <span>&nbsp;Message</span>
        </a>
      </span>
    </TwitterSection>
  )
}

WebIntents.defaultProps = {
  title: '',
  description: '',
  url: '',
  pathname: ''
};

export default WebIntents
