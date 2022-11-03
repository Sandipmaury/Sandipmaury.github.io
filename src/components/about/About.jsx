import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { AboutText } from "./AboutText";
import { ProfileImage } from "./ProfileImage";
import { Resume } from "./Resume";

export const About = () => {
  return (
    <Box id="about" w="100%" h="auto" bg="#0c0b48" zIndex={3}>
      <Flex
        w="100%"
        maxWidth="1200px"
        m="auto"
        bg="#0c0b48"
        direction={["column-reverse", "column-reverse", "row", "row"]}
        py="30px"
      >
        <Flex
          flex={1}
          direction="column"
          justifyContent="center"
          gap={30}
          alignItems="center"
          px="10px"
        >
          <AboutText />
          <Button
            bg="#0c0b48"
            border="1px solid #ffffff"
            color="#ffffff"
            _hover={{ backgroundColor: "#fe3e57" }}
          >
            <Resume />
          </Button>
        </Flex>
        <Box flex={1}>
          <ProfileImage />
        </Box>
      </Flex>
    </Box>
  );
};
