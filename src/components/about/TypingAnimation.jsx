import React from "react";
import { TypeAnimation } from "react-type-animation";

export const TypingAnimation = ({ one, two, three }) => {
  return (
    <TypeAnimation
      sequence={[
        one,
        1000,
        two,
        1000,
        three,
        1000,
        three,
        1000,
        two,
        1000,
        one,
        1000,
        "",
        500,
      ]}
      wrapper="div"
      repeat={Infinity}
    />
  );
};
