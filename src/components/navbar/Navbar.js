import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { Logo } from "./Logo";
import { RightNavbar } from "./RightNavbar";

export const Navbar = () => {
  const [navbar, updateNavbar] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  });

  return (
    <Box
      w="100%"
      h="auto"
      bg="#0c0b48"
      zIndex={7}
      borderBottom={navbar ? "1px solid #fe3e57" : "1px solid transparent"}
      position="sticky"
      top="0px"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px="10px"
        w="100%"
        maxWidth="1200px"
        m="auto"
        h="70px"
      >
        <Logo />
        <RightNavbar />
      </Flex>
    </Box>
  );
};
