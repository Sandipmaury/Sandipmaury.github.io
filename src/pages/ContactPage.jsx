import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const ContactPage = () => {
  return (
    <Stack direction="column" h="100%" w="100%" alignItems="center">
      <Text fontSize="2rem">Want to contact me</Text>
      <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
        <Box>
          <Text fontSize="30px">Write to me</Text>
          <Box
            _hover={{ cursor: "pointer" }}
            fontSize="10rem"
            onClick={() =>
              (window.location = "mailto:sandipmaurya7619@gmail.com")
            }
            className="material-symbols-outlined"
          >
            mail
          </Box>
        </Box>
        <Box>
          <Text fontSize="30px">Write to me</Text>
          <Box
            _hover={{ cursor: "pointer" }}
            fontSize="10rem"
            onClick={() =>
              (window.location = "mailto:sandipmaurya7619@gmail.com")
            }
            className="material-symbols-outlined"
          >
            mail
          </Box>
        </Box>
      </Flex>
    </Stack>
  );
};
