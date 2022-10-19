import { Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsHeartFill } from "react-icons/bs";

function Footer() {
  return (
    <Stack direction="row" w="100%" justifyContent="center" alignItems="center">
      <Text>This is build by me with</Text>
      <Icon color="red" as={BsHeartFill} />
    </Stack>
  );
}

export default Footer;
