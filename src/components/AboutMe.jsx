import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ResumeDownload } from "./ResumeDownload";

export const AboutMe = () => {
  return (
    <Stack w="100%" justifyContent="center" gap="2rem" direction="column">
      <Box>
        <Text color="#858687" fontSize="3rem" fontWeight="bold">
          Hi, I am
        </Text>
        <Text color="#858687" fontSize="3rem" fontWeight="bold">
          Sandip Maurya
        </Text>
        <Text fontSize="20px" color="gray">
          Aspiring MERN Stack Developer with 1000+ hours of coding experience.
          Capable of working with front-end and back-end technologies in
          collaborative projects.
        </Text>
      </Box>
      <ResumeDownload text={"Download Resume"} />
    </Stack>
  );
};
