import React from 'react'
import config from '../../../data/config'
import styled from '@emotion/styled'
import { Twitter } from 'emotion-icons/fa-brands/Twitter'

const TwitterSection = styled.div`
  display: flex;
  align-items: center;
`;

const WebIntents = ({ slug, tweet_id }) => {
  const title = config.userTwitter
  const url = config.siteUrl + slug

  return (
    <TwitterSection>
      <span>
      <a
        itemProp='url'
        rel='me'
        title={title}
        key={tweet_id}
        url={url}
        data-screen-name='@donboulton'
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
        data-screen-name='donboulton'
        data-screen-data-show-count='true'
        data-show-count='true'
        title={title}
        key={url}
        url={url}
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
        title={title}
        url={url}
        key={url}
        href='https://twitter.com/messages/compose?recipient_id=105217183'
        className='twitter-dm-button'
        data-screen-name='@donboulton'
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

export default WebIntents
