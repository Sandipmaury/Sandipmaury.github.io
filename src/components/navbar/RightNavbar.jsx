import { Box } from "@chakra-ui/react";
import React from "react";
import { NavOnOtherDevice } from "./NavOnOtherDevice";
import { NavOnSmallDevice } from "./NavOnSmallDevice";

export const RightNavbar = ({ activeNav, setActiveNav }) => {
  return (
    <Box>
      <NavOnOtherDevice activeNav={activeNav} setActiveNav={setActiveNav} />
      <NavOnSmallDevice activeNav={activeNav} setActiveNav={setActiveNav} />
    </Box>
  );
};
