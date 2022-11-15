import React from "react";
import { Flex, Icon, Link } from "@chakra-ui/react";
import {
  BsWhatsapp,
  BsLinkedin,
  BsFillTelephoneFill,
  BsGithub,
} from "react-icons/bs";
import { HiMail } from "react-icons/hi";

export const ContactMe = () => {
  const hoverEffect = {
    color: "#fe3e57",
    transition: "0.3s",
    cursor: "pointer",
    boxShadow: "md",
    transition: "0.2s",
    fontSize: "40px",
  };

  return (
    <Flex
      gap={"5px"}
      mt="20px"
      color={"#ffffff"}
      fontSize={"20px"}
      justifyContent="center"
      alignItems={"center"}
    >
      <Flex justifyContent={"center"} alignItems={"center"} w="60px" h="60px">
        <Link target={"_blank"} href="tel:+917011096279">
          <Icon
            transition={"0.2s"}
            _hover={hoverEffect}
            as={BsFillTelephoneFill}
          />
        </Link>
      </Flex>
      <Flex justifyContent={"center"} alignItems={"center"} w="60px" h="60px">
        <Link
          target={"_blank"}
          href="https://api.whatsapp.com/send/?phone=91701109279&text&type=phone_number&app_absent=0"
        >
          <Icon transition={"0.2s"} _hover={hoverEffect} as={BsWhatsapp} />
        </Link>
      </Flex>
      <Flex justifyContent={"center"} alignItems={"center"} w="60px" h="60px">
        <Link
          target="_blank"
          _hover={{ textDecoration: "none" }}
          href="https://www.linkedin.com/in/sandip-maurya-003066235/"
        >
          <Icon transition={"0.2s"} _hover={hoverEffect} as={BsLinkedin} />
        </Link>
      </Flex>
      <Flex justifyContent={"center"} alignItems={"center"} w="60px" h="60px">
        <Icon
          transition={"0.2s"}
          _hover={hoverEffect}
          cursor={"pointer"}
          onClick={() =>
            (window.location = "mailto:sandipmaurya7619@gmail.com")
          }
          as={HiMail}
        />
      </Flex>
      <Flex justifyContent={"center"} alignItems={"center"} w="60px" h="60px">
        <Link
          transition={"0.2s"}
          _hover={hoverEffect}
          target="_blank"
          href="https://github.com/Sandipmaury"
        >
          <Icon as={BsGithub} />
        </Link>
      </Flex>
    </Flex>
  );
};
