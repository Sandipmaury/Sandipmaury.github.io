import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { TypingAnimation } from "./TypingAnimation";

export const AboutText = () => {
  return (
    <Box w="100%" color="#ffffff">
      <Text fontSize={["2rem", "3rem", "3rem", "3rem"]} fontWeight="bold">
        Hi, I am
      </Text>
      <Text
        color="#fe3e57"
        fontSize={["2rem", "3rem", "3rem", "3rem"]}
        fontWeight="bold"
      >
        Sandip Maurya
      </Text>
      <Box fontSize="1.5rem" fontWeight="medium">
        <TypingAnimation
          one={"MERN"}
          two={"MERN STACK"}
          three={"MERN STACK DEVELOPER"}
        />
      </Box>
      <Text mt="20px" fontSize="20px">
        Aspiring MERN Stack Developer with 1000+ hours of coding experience.
        Capable of working with front-end and back-end technologies in
        collaborative projects.
      </Text>
    </Box>
  );
};
