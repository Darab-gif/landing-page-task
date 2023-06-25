import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import scroll from "../hook/useScroll";

const ScrollUp = ({ bodyRef }) => {
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    const showButton = () => {
      if (window.screenY < 100) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    };

    window.addEventListener("scroll", showButton);

    return () => {
      window.removeEventListener("scroll", showButton);
    };
  }, []);

  return (
    <>
      {scrollUp && (
        <button
          className="fixed right-4 bottom-6 bg-purple text-white flex items-center justify-center rounded-full py-2 px-2"
          onClick={() => scroll(bodyRef)}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollUp;
