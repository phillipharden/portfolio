import React from "react";
import AnimatedCursor from "react-animated-cursor";

function Cursor() {
  return (
    <AnimatedCursor
      className="cursor"
      innerSize={5}
      outerSize={15}
      color="65, 71, 112"
      outerAlpha={0.2}
      innerScale={0}
      outerScale={2}
      trailingSpeed={8}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
}

export default Cursor;
