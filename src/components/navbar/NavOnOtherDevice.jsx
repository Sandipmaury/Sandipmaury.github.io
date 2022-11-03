import { Box, Flex, Hide, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { NavLinks } from "../../utils/Constants";
import { Resume } from "../about/Resume";

export const NavOnOtherDevice = () => {
  return (
    <Flex
      gap="30px"
      fontWeight="medium"
      fontSize={20}
      color="#ffffff"
      bg="#0c0b48"
    >
      <Hide below="md">
        {NavLinks?.map((nav, index) => {
          return (
            <NavLink key={index} to={nav?.link}>
              {({ isActive }) =>
                isActive ? (
                  <Text color="#fe3e57">{nav?.title}</Text>
                ) : (
                  <Text
                    transition="0.2s"
                    _hover={{ transition: "0.2s", color: "#fe3e57" }}
                  >
                    {nav?.title}
                  </Text>
                )
              }
            </NavLink>
          );
        })}
        <Box
          transition="0.2s"
          _hover={{ transition: "0.2s", color: "#fe3e57" }}
        >
          <Resume />
        </Box>
      </Hide>
    </Flex>
  );
};
