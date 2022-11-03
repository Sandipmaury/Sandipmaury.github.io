import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { HiDownload } from "react-icons/hi";

export const Resume = () => {
  return (
    <Link
      href="https://drive.google.com/uc?export=download&id=15c-2Mh206I72A7kAmu9qUQIwd-Pln1FQ"
      download
      style={{ textDecoration: "none" }}
    >
      <Flex alignItems="center" gap="5px">
        <Text>Resume</Text>
        <Icon as={HiDownload} />
      </Flex>
    </Link>
  );
};
