import React, { useEffect, useRef } from "react";

const Button = React.forwardRef(({ children, ...delegated }, ref) => {
  return (
    <button ref={ref} {...delegated}>
      {children}
    </button>
  );
});

const FancyButton = React.forwardRef((props, ref) => {
  return (
    <>
      <Button {...props} ref={ref}>
        FancyButton
      </Button>
    </>
  );
});

const ForwardRefExercise1 = () => {
  const buttonRef = useRef();
  const FancybuttonRef = useRef();

  useEffect(() => {
    FancybuttonRef.current.click();
    buttonRef.current.click();

    return () => {};
  }, []);

  const fancyButtonHandler = () => {
    console.log("Fancy button was clicked", FancybuttonRef.current);
  };

  const onMouseOver = () => {
    console.log("mouseOver", buttonRef.current);
  };
  const onClickHandler = () => {
    console.log("button:  is Clicked");
  };

  return (
    <>
      <div>ForwardRefExercise1</div>
      <Button
        onMouseOver={onMouseOver}
        onClick={onClickHandler}
        ref={buttonRef}
      >
        forward the ref
      </Button>
      <FancyButton
        ref={FancybuttonRef}
        onClick={fancyButtonHandler}
        style={{ background: "orange", padding: "10px" }}
      >
        FancyButton
      </FancyButton>
    </>
  );
};

export default ForwardRefExercise1;
