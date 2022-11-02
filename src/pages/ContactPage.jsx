import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Contact } from "../components/Contact";
import { Email } from "../components/Email";

export const ContactPage = () => {
  return (
    <Stack direction="column" h="100%" w="100%" alignItems="center">
      <Text fontSize="2rem">Contact me</Text>
      <Flex
        direction="column"
        w={["100%", "100%", "90%", "80%"]}
        h="100%"
        overflowY="auto"
        justifyContent="space-between"
        gap="30px"
      >
        <Box w="100%" m="auto">
          <Email />
        </Box>
        <Contact />
      </Flex>
    </Stack>
  );
};
