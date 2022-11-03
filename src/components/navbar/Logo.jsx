import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <Box fontSize={25} fontWeight="bold" color="#fe3e57" bg="#0c0b48">
        S@ndip/
      </Box>
    </Link>
  );
};
