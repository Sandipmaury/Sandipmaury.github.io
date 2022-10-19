import React from "react";
import { Flex, Stack, Text, useColorMode } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../utils/Constants";

export const NavRight = ({ onClose }) => {
  const { colorMode } = useColorMode();

  const hoverEffect = {
    backgroundColor: "#f37921",
    color: "white",
    transition: "0.3s",
    cursor: "pointer",
    boxShadow: "md",
  };

  return (
    <Stack
      direction={["column", "column", "column", "row"]}
      gap="10px"
      justifyContent={["start", "start", "start", "space-around"]}
      alignItems={["start", "start", "start", "center"]}
      bg={colorMode === "dark" ? "#1c2128" : "white"}
      p={["2rem", "2rem", "2rem", "0px"]}
      h="100%"
    >
      {navLinks?.map((el, index) => (
        <NavLink key={index} to={el?.link} onClick={onClose}>
          {({ isActive }) =>
            isActive && el?.link !== "/" ? (
              <Flex
                alignItems="start"
                gap="5px"
                p="3px 5px"
                style={hoverEffect}
              >
                <span className="material-symbols-outlined">{el?.icon}</span>
                <Text>{el?.title}</Text>
              </Flex>
            ) : (
              <Flex
                alignItems="start"
                gap="5px"
                p="3px 5px"
                _hover={hoverEffect}
                transition="0.3s"
              >
                <span className="material-symbols-outlined">{el?.icon}</span>
                <Text>{el?.title}</Text>
              </Flex>
            )
          }
        </NavLink>
      ))}
    </Stack>
  );
};
