import { Box, Image } from "@chakra-ui/react";
import React from "react";
import profileImage from "./profileImage.jpeg";
export const ProfileImage = () => {
  return (
    <Box w="100%">
      <Image rounded={"full"} alt="sandip maurya" src={profileImage} w="100%" />
    </Box>
  );
};
