import { Box, Icon, Link, Stack } from "@chakra-ui/react";
import React from "react";
import { SiGmail } from "react-icons/si";

export const Links = () => {
  return (
    <Stack
      direction={["row", "row", "column", "column"]}
      h={["10%", "10%", "100%", "100%"]}
      alignItems="center"
      justifyContent="center"
      gap="2rem"
      fontSize="2rem"
    >
      <Link target="_blank" href="https://github.com/Sandipmaury">
        <Box className="fab fa-github" />
      </Link>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/sandip-maurya-003066235/"
      >
        <Box className="fab fa-linkedin" />
      </Link>

      <Box
        _hover={{ cursor: "pointer" }}
        onClick={() => (window.location = "mailto:sandipmaurya7619@gmail.com")}
        className="material-symbols-outlined"
      >
        <Icon as={SiGmail} />
      </Box>
    </Stack>
  );
};
