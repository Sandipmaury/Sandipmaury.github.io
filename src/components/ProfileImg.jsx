import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { profileImg } from "../utils/Constants";

export const ProfileImg = () => {
  return (
    <Flex w="100%" alignItems="center" maxW="500px" justifyContent="center">
      <Image w="100%" h="100%" src={profileImg} alt="sandip maurya" />
    </Flex>
  );
};
