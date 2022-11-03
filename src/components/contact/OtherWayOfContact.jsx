import React from "react";
import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { BsWhatsapp, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

export const OtherWayOfContact = () => {
  const hoverEffect = {
    backgroundColor: "#fe3e57",
    color: "white",
    transition: "0.3s",
    cursor: "pointer",
    boxShadow: "md",
  };

  return (
    <Box py="20px">
      <Flex gap="10px" alignItems="center" p="3px 5px" _hover={hoverEffect}>
        <Icon
          fontSize={["15px", "17px", "20px", "20px"]}
          as={BsFillTelephoneFill}
        />
        <Text fontSize={["15px", "17px", "20px", "20px"]}>+917011096279</Text>
      </Flex>
      <Flex
        my="30px"
        gap="10px"
        alignItems="center"
        p="3px 5px"
        _hover={hoverEffect}
      >
        <Icon fontSize={["15px", "17px", "20px", "20px"]} as={BsWhatsapp} />
        <Text fontSize={["15px", "17px", "20px", "20px"]}>+917011096279</Text>
      </Flex>
      <Link
        target="_blank"
        _hover={{ textDecoration: "none" }}
        href="https://www.linkedin.com/in/sandip-maurya-003066235/"
      >
        <Flex gap="10px" alignItems="center" p="3px 5px" _hover={hoverEffect}>
          <Icon fontSize={["15px", "17px", "20px", "20px"]} as={BsLinkedin} />
          <Text fontSize={["15px", "17px", "20px", "20px"]}>Linkedin</Text>
        </Flex>
      </Link>
      <Flex
        my="30px"
        gap="10px"
        alignItems="center"
        p="3px 5px"
        onClick={() => (window.location = "mailto:sandipmaurya7619@gmail.com")}
        _hover={hoverEffect}
      >
        <Icon fontSize={["15px", "17px", "20px", "20px"]} as={HiMail} />
        <Text fontSize={["15px", "17px", "20px", "20px"]}>
          sandipmaurya7619@gmail.com
        </Text>
      </Flex>
    </Box>
  );
};
