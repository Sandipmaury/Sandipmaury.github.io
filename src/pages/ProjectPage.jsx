import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import Constructor from "../components/Constructor";

export const ProjectPage = () => {
  return (
    <Stack direction="column" h="100%" w="100%" alignItems="center">
      <Text fontSize={["1.5rem", "1.5rem", "2rem", "2rem"]}>
        Projects I have build
      </Text>
      <Constructor endPoint={"projects"} />
    </Stack>
  );
};
