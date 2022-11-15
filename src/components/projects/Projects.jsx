import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { projetArr } from "../../utils/Constants";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <Box id="projects" w="100%" h="auto" bg="#0c0b48" zIndex={3}>
      <Box
        px="5px"
        w="100%"
        maxWidth="1200px"
        m="auto"
        color="#ffffff"
        py="30px"
      >
        <Text textAlign="center" fontWeight="medium" fontSize={30} mb={30}>
          Projects
        </Text>
        {projetArr?.map((el, index) => (
          <ProjectCard item={el} key={index} />
        ))}
      </Box>
    </Box>
  );
};
