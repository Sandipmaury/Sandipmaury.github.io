import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Mail } from "./Mail";
import { OtherWayOfContact } from "./OtherWayOfContact";

export const Contact = () => {
  return (
    <Box id="contact" w="100%" h="auto" bg="#070640" zIndex={3}>
      <Box w="100%" maxWidth="1200px" m="auto" py="30px" color="#ffffff">
        <Text textAlign="center" fontWeight="medium" fontSize={30} mb={30}>
          Contact me
        </Text>
        <Flex
          alignItems="center"
          direction={["column", "column", "row", "row"]}
          gap="30px"
        >
          <Box flex={1} w="100%" px="10px">
            <Mail />
          </Box>
          <OtherWayOfContact />
        </Flex>
      </Box>
    </Box>
  );
};
