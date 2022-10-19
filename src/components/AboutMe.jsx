import {
  Box,
  Button,
  Flex,
  Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

export const AboutMe = () => {
  const { colorMode } = useColorMode();
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
            border={
              colorMode === "dark" ? "1px solid white" : "1px solid #1c2128"
            }
            bg="transparent"
            download
          >
            Download Resume
          </Button>
        </Link>
      </Flex>
    </Stack>
  );
};
