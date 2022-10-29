import React from "react";
import { Flex, Stack, Text, useColorMode } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const NavLeft = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
