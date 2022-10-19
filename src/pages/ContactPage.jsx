import { Box, Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";

export const ContactPage = () => {
  const hoverEffect = {
    backgroundColor: "#f37921",
    color: "white",
    transition: "0.3s",
    cursor: "pointer",
    boxShadow: "md",
  };
  return (
    <Stack direction="column" h="100%" w="100%" alignItems="center">
      <Text fontSize="2rem">Contact me</Text>
      <Flex
        w="100%"
        h="100%"
        alignItems="center"
        gap="30px"
        direction="column"
        justifyContent="center"
      >
        <Flex gap="10px" alignItems="center" p="3px 5px" _hover={hoverEffect}>
          <Box fontSize="2rem" className="material-symbols-outlined">
            phone
          </Box>
          <Text fontSize={["15px", "17px", "20px", "30px"]}>+917011096279</Text>
        </Flex>
        <Flex gap="10px" alignItems="center" p="3px 5px" _hover={hoverEffect}>
          <Icon
            fontSize={["1.5rem", "1.5rem", "1.6rem", "2rem"]}
            as={BsWhatsapp}
          />
          <Text fontSize={["15px", "17px", "20px", "30px"]}>+917011096279</Text>
        </Flex>
        <Link
          target="_blank"
          _hover={{ textDecoration: "none" }}
          href="https://www.linkedin.com/in/sandip-maurya-003066235/"
        >
          <Flex gap="10px" alignItems="center" p="3px 5px" _hover={hoverEffect}>
            <Icon
              fontSize={["1.5rem", "1.5rem", "1.6rem", "2rem"]}
              as={BsLinkedin}
            />
            <Text fontSize={["15px", "17px", "20px", "30px"]}>Linkedin</Text>
          </Flex>
        </Link>
        <Flex
          gap="10px"
          alignItems="center"
          p="3px 5px"
          onClick={() =>
            (window.location = "mailto:sandipmaurya7619@gmail.com")
          }
          _hover={hoverEffect}
        >
          <Box
            fontSize={["1.5rem", "1.5rem", "1.6rem", "2rem"]}
            className="material-symbols-outlined"
          >
            mail
          </Box>
          <Text fontSize={["15px", "17px", "20px", "30px"]}>
            sandipmaurya7619@gmail.com
          </Text>
        </Flex>
      </Flex>
    </Stack>
  );
};
