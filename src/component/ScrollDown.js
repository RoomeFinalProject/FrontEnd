// Scroll방식을 써서 페이지 내려가게 하기 -------------------------------------------------------
import React, { useRef } from "react";

const ScrollDownComponent = () => {
  const touchStartY = useRef(null);

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (touchStartY.current !== null) {
      const touchMoveY = e.touches[0].clientY;
      const deltaY = touchMoveY - touchStartY.current;

      // Check if the user is swiping down
      if (deltaY > 0) {
        // You can adjust the sensitivity by changing the value in the condition
        if (deltaY > 50) {
          // Scroll down by a specific amount or to a specific position
          window.scrollTo(0, window.scrollY + 100);
          // You can adjust the scroll amount as needed
        }
      }

      touchStartY.current = null;
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      style={{ height: "10vh", overflow: "scroll" }}
    ></div>
  );
};

export default ScrollDownComponent;
