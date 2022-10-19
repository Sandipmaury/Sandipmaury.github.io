import React from "react";
import {
  Flex,
  Hide,
  Icon,
  Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { SiGmail } from "react-icons/si";

export const NavLeft = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const hoverEffect = {
    backgroundColor: "#f37921",
    color: "white",
    transition: "0.3s",
    cursor: "pointer",
    boxShadow: "md",
  };
  return (
    <Stack
      direction="row"
      h="50px"
      gap={["auto", "30px", "30px", "30px"]}
      justifyContent="space-around"
      alignItems="center"
    >
      <NavLink to="/">
        <Text
          color={colorMode === "dark" ? "#f37921 " : "#0d1b25"}
          fontWeight="bold"
          fontSize="2xl"
        >
          S@NDIP/
        </Text>
      </NavLink>
      <Link _hover={{ textDecoration: "none" }} target="_blank">
        <Flex
          alignItems="center"
          gap="5px"
          onClick={() =>
            (window.location = "mailto:sandipmaurya7619@gmail.com")
          }
          p="3px 5px"
          _hover={hoverEffect}
          transition="0.3s"
        >
          <Icon as={SiGmail} />
          <Hide below="1024px">
            <Text>sandipmaurya7619@gmail.com</Text>
          </Hide>
        </Flex>
      </Link>
      {/* toggle theme */}
      <Flex
        alignItems="center"
        justifyContent="center"
        _hover={{ cursor: "pointer" }}
      >
        <span onClick={toggleColorMode} className="material-symbols-outlined">
          {colorMode === "dark" ? "dark_mode" : "light_mode"}
        </span>
      </Flex>
    </Stack>
  );
};
