import { Box, Flex, Grid, Icon, Link, Stack, Text } from "@chakra-ui/react";
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
      <Box w="100%" h="100%">
        <Box w="100%"></Box>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap="20px"
          flexWrap="wrap"
        >
          <Flex gap="10px" alignItems="center" p="3px 5px" _hover={hoverEffect}>
            <Box fontSize="20px" className="material-symbols-outlined">
              phone
            </Box>
            <Text fontSize={["15px", "17px", "20px", "20px"]}>
              +917011096279
            </Text>
          </Flex>
          <Flex gap="10px" alignItems="center" p="3px 5px" _hover={hoverEffect}>
            <Icon fontSize={["15px", "17px", "20px", "20px"]} as={BsWhatsapp} />
            <Text fontSize={["15px", "17px", "20px", "20px"]}>
              +917011096279
            </Text>
          </Flex>
          <Link
            target="_blank"
            _hover={{ textDecoration: "none" }}
            href="https://www.linkedin.com/in/sandip-maurya-003066235/"
          >
            <Flex
              gap="10px"
              alignItems="center"
              p="3px 5px"
              _hover={hoverEffect}
            >
              <Icon
                fontSize={["15px", "17px", "20px", "20px"]}
                as={BsLinkedin}
              />
              <Text fontSize={["15px", "17px", "20px", "20px"]}>Linkedin</Text>
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
              fontSize={["15px", "17px", "20px", "20px"]}
              className="material-symbols-outlined"
            >
              mail
            </Box>
            <Text fontSize={["15px", "17px", "20px", "20px"]}>
              sandipmaurya7619@gmail.com
            </Text>
          </Flex>
        </Grid>
      </Box>
    </Stack>
  );
};
