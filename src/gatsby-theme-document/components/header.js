import React from "react";
import { Link } from "gatsby";
import { css, Styled } from "theme-ui";
import Header from "gatsby-theme-document/src/components/header";

export default props => {
  return (
    <Header {...props}>
      <Styled.a
        as={Link}
        to="/search"
        css={css({
          flexGrow: 1,
          alignSelf: ["normal", "center"],
          mx: [16, 24],
          lineHeight: 2,
          fontFamily: `heading`,
          fontWeight: `bold`,
          textDecoration: `none`,
          color: "#cccccc",
          ":hover": {
            textDecoration: `none`
          }
        })}
      >
        Search
      </Styled.a>
    </Header>
  );
};
