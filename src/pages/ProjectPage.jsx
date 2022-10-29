import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import Projects from "../components/Projects";

export const ProjectPage = () => {
  return (
    <Stack direction="column" h="100%" w="100%">
      <Text textAlign="center" fontSize={["1.5rem", "1.5rem", "2rem", "2rem"]}>
        Projects I have build
      </Text>
      <Projects />
    </Stack>
  );
};
