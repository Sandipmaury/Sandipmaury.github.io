import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { profileImg } from "../../utils/Constants";

export const ProfileImage = () => {
  return (
    <Box w="100%">
      <Image alt="sandip maurya" src={profileImg} w="100%" />
    </Box>
  );
};
