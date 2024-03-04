import React, { useEffect, useRef, useState } from "react";

const useOnScreen = () => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsOnScreen(entry.isIntersecting);
    });

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return [isOnScreen, elementRef];
};

export default useOnScreen;
