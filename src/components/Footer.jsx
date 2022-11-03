import { Box, Flex, Text } from "@chakra-ui/react";
import { BsHeartFill } from "react-icons/bs";
import React from "react";

export const Footer = () => {
  return (
    <Box w="100%" bg="#0c0b48" h="auto" zIndex={3}>
      <Flex
        w="100%"
        maxWidth="1200px"
        m="auto"
        h="50px"
        alignItems="center"
        justifyContent="center"
        gap="10px"
        color="#ffffff"
      >
        <Text>This is bulid by me with</Text>
        <BsHeartFill />
      </Flex>
    </Box>
  );
};
