import React from "react";
import Header from "gatsby-theme-document/src/components/header";

export default props => {

  return (
    <Header {...props}>
      <div style={{ color: "white"}}> Cool</div>
    </Header>
  );
};
