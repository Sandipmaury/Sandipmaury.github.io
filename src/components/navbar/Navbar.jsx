import { Box, Hide, Show, Slide, Stack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { NavLeft } from "./NavLeft";
import { NavRight } from "./NavRight";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack
      direction="row"
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      zIndex={10}
    >
      <NavLeft />
      <Hide below="1025px">
        <NavRight />
      </Hide>
      <Show below="1025px">
        <Box onClick={isOpen ? onClose : onOpen}>
          <span className="material-symbols-outlined">
            {isOpen ? "close" : "menu"}
          </span>
        </Box>
        {/* for small screen */}
        <Slide direction="left" in={isOpen}>
          <NavRight onClose={onClose} />
        </Slide>
      </Show>
    </Stack>
  );
}

export default Navbar;
