import React from "react";

// LinkButton component that will render anchor tag or button based on whether the href attribute is available or not

const LinkButton = ({ href, children, ...delegated }) => {
  const Tag = typeof href === "string" ? "a" : "button";

  // React.createElement(Tag->a || button, { // props} , children)

  return (
    <>
      <Tag href={href} {...delegated}>
        {children}
      </Tag>
    </>
  );
};

const PolymorphismDemo = () => {
  const onClick = () => {
    console.log("button is clicked");
  };
  return (
    <>
      <div>PolymorphismDemo</div>
      <LinkButton onClick={onClick}>Button</LinkButton>
      <LinkButton href={"https://www.google.com"} target="_blank">
        Link to Google.com
      </LinkButton>
    </>
  );
};

export default PolymorphismDemo;
