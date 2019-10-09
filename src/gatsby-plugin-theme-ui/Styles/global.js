import { css } from '@emotion/core';

const globalStyles = css`
  /**
   * Thanks to Benjamin De Cock
   * https://gist.github.com/bendc/ac03faac0bf2aee25b49e5fd260a727d
   */
  :root {
    --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
    --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  :root {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
  
  html {
    scrollbar-color: linear-gradient(to bottom,#1d1d1d,#171717);
    scrollbar-width: 10px;
    background: #100e17;
    color: #fff;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    }
  ::-webkit-scrollbar-thumb {
    background: -webkit-gradient(linear,left top,left bottom,from(#d64000),to(#da1b60));
    background: linear-gradient(to bottom,#1d1d1d,#171717);
    border-radius: 10px;
    -webkit-box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25);
    box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25);
    }
  ::-webkit-scrollbar-track {
    background: linear-gradient(to right,#201c29,#201c29 1px,#100e17 1px,#100e17)
  }
  /* https://github.com/gatsbyjs/gatsby/issues/15486 */
  .gatsby-resp-image-image {
    width: 100%;
    height: 100%;
    margin: 0;
    vertical-align: middle;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default globalStyles;
