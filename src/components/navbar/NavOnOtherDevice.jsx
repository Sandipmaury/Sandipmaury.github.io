import { Box, Flex, Hide, Link } from "@chakra-ui/react";
import React from "react";
import { Resume } from "../about/Resume";

export const NavOnOtherDevice = ({ activeNav, setActiveNav }) => {
  return (
    <Flex
      gap="30px"
      fontWeight="medium"
      fontSize={20}
      color="#ffffff"
      bg="#0c0b48"
    >
      <Hide below="md">
        <Link
          transition="0.2s"
          color={activeNav === "#about" ? "#fe3e57" : "#ffffff"}
          _hover={{
            transition: "0.2s",
            color: "#fe3e57",
            textDecoration: "none",
          }}
          href="#about"
          className={activeNav === "#about" ? "active" : ""}
          onClick={() => setActiveNav("#about")}
        >
          About
        </Link>
        <Link
          transition="0.2s"
          color={activeNav === "#teckstacks" ? "#fe3e57" : "#ffffff"}
          _hover={{
            transition: "0.2s",
            color: "#fe3e57",
            textDecoration: "none",
          }}
          href="#teckstacks"
          className={activeNav === "#teckstacks" ? "active" : ""}
          onClick={() => setActiveNav("#teckstacks")}
        >
          Teck Stacks
        </Link>
        <Link
          transition="0.2s"
          color={activeNav === "#projects" ? "#fe3e57" : "#ffffff"}
          _hover={{
            transition: "0.2s",
            color: "#fe3e57",
            textDecoration: "none",
          }}
          href="#projects"
          className={activeNav === "#projects" ? "active" : ""}
          onClick={() => setActiveNav("#projects")}
        >
          Projects
        </Link>
        <Link
          transition="0.2s"
          color={activeNav === "#contact" ? "#fe3e57" : "#ffffff"}
          _hover={{
            transition: "0.2s",
            color: "#fe3e57",
            textDecoration: "none",
          }}
          href="#contact"
          className={activeNav === "#contact" ? "active" : ""}
          onClick={() => setActiveNav("#contact")}
        >
          Contact
        </Link>
        <Box
          transition="0.2s"
          _hover={{ transition: "0.2s", color: "#fe3e57" }}
        >
          <Resume />
        </Box>
      </Hide>
    </Flex>
  );
};
