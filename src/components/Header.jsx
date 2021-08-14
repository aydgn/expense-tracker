import React from "react";

export const Header = props => {
  let title = "";
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};
