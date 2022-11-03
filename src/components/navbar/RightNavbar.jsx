import { Box } from "@chakra-ui/react";
import React from "react";
import { NavOnOtherDevice } from "./NavOnOtherDevice";
import { NavOnSmallDevice } from "./NavOnSmallDevice";

export const RightNavbar = () => {
  return (
    <Box>
      <NavOnOtherDevice />
      <NavOnSmallDevice />
    </Box>
  );
};
