import React from "react";
const ValidTags = ["ul", "ol"];

const List = ({ as: Tag = "ul", children, ...rest }) => {
  if (!ValidTags.includes(Tag)) {
    console.warn("value passed in as is not a valid option");
    Tag = "ul";
  }

  return (
    <>
      <Tag {...rest}>{children}</Tag>
    </>
  );
};

const ExercisePolymorphism1 = () => {
  return (
    <>
      <div>ExercisePolymorphism1</div>
      <List as="ol" type="A">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </List>

      <List as="ul" type="square">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </List>

      <List as="button" type="A">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </List>
    </>
  );
};

export default ExercisePolymorphism1;
