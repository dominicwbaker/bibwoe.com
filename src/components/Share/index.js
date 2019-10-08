import React, { Component } from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  RedditShareButton,
  FacebookShareCount,
  LinkedinShareCount,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  LinkedinIcon,
  RedditIcon,
} from 'react-share'
import config from '../../../data/config'
import styled from '@emotion/styled'

const ShareSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 15px 0;
`;

const Count = styled.div`
  text-align: center;
`;

class Share extends Component {
  render () {
    const { title, slug, excerpt, mobile } = this.props
    const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
    const url = config.siteUrl + realPrefix + slug

    const iconSize = mobile ? 36 : 48
    const filter = count => (count > 0 ? count : '')

    return (
      <ShareSection>
        <RedditShareButton url={url} title={title}>
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>
            {count => <Count>{filter(count)}</Count>}
          </RedditShareCount>
        </RedditShareButton>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <FacebookShareButton url={url} quote={excerpt}>
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {count => <Count>{filter(count)}</Count>}
          </FacebookShareCount>
        </FacebookShareButton>
        <LinkedinShareButton
          url={url}
          title={title}
          description={excerpt}
        >
          <LinkedinIcon round size={iconSize} />
          <LinkedinShareCount url={url}>
            {count => <Count>{filter(count)}</Count>}
          </LinkedinShareCount>
        </LinkedinShareButton>
        <PinterestShareButton url={url}>
          <PinterestIcon round size={iconSize} />
        </PinterestShareButton>
      </ShareSection>
    )
  }
}

export default Share
