import { Button, Flex, Icon, Link, useColorMode } from "@chakra-ui/react";
import React from "react";
import { HiDocumentText } from "react-icons/hi";

export const ResumeDownload = ({ text }) => {
  const { colorMode } = useColorMode();

  return (
    <Flex justifyContent="center">
      <Link
        href="https://drive.google.com/uc?export=download&id=15c-2Mh206I72A7kAmu9qUQIwd-Pln1FQ"
        download
        style={{ textDecoration: "none" }}
      >
        <Button
          _hover={{
            backgroundColor: "#f37921",
            color: "white",
            transition: "0.3s",
            cursor: "pointer",
            boxShadow: "md",
          }}
          p="0px 3px"
          leftIcon={<Icon fontSize="20px" as={HiDocumentText} />}
          border={
            text === "Resume"
              ? null
              : colorMode === "dark"
              ? "1px solid white"
              : "1px solid #1c2128"
          }
          borderRadius={text === "Resume" ? "0px" : "5px"}
          bg="transparent"
          fontWeight={text === "Resume" ? "normal" : "medium"}
          download
        >
          {text}
        </Button>
      </Link>
    </Flex>
  );
};
