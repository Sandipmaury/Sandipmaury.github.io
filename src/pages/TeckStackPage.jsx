import { Box, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { BiGitBranch } from "react-icons/bi";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiChakraui,
  SiCypress,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

export const TeckStackPage = () => {
  return (
    <Stack direction="column" h="100%" w="100%" alignItems="center">
      <Text fontSize={["1.5rem", "1.5rem", "2rem", "2rem"]}>
        Teck Stacks I have learned
      </Text>
      <Grid
        gridTemplateColumns={[
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
          "repeat(5, 1fr)",
        ]}
        gap="2rem"
        overflowY="auto"
        p="10px"
        justifySelf="center"
      >
        <Box
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px
        6px"
          borderRadius="5px"
        >
          <Icon as={FaHtml5} boxSize="8rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="1.5rem">
            HTML
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px
        6px"
          borderRadius="5px"
        >
          <Icon as={FaCss3Alt} boxSize="8rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="1.5rem">
            CSS
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px
        6px"
          borderRadius="5px"
        >
          <Icon as={SiJavascript} boxSize="8rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="1.5rem">
            JavaScript
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px
        6px"
          borderRadius="5px"
        >
          <Icon as={FaNodeJs} boxSize="8rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="1.5rem">
            NodeJS
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px
        6px"
          borderRadius="5px"
        >
          <Icon as={FaReact} boxSize="8rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="1.5rem">
            ReactJS
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px
        6px"
          borderRadius="5px"
        >
          <Icon as={SiRedux} boxSize="8rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="1.5rem">
            Redux
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px
        6px"
          borderRadius="5px"
        >
          <Icon as={SiChakraui} boxSize="8rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="1.5rem">
            Chakra UI
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px
        6px"
          borderRadius="5px"
        >
          <Icon as={BiGitBranch} boxSize="8rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="1.5rem">
            Git
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px
        6px"
          borderRadius="5px"
        >
          <Icon as={FaGithub} boxSize="8rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="1.5rem">
            Github
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px
        6px"
          borderRadius="5px"
        >
          <Icon as={SiCypress} boxSize="8rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="1.5rem">
            Cypress
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px
        6px"
          borderRadius="5px"
        >
          <Icon as={SiExpress} boxSize="8rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="1.5rem">
            ExpressJS
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px
        6px"
          borderRadius="5px"
        >
          <Icon as={SiMongodb} boxSize="8rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="1.5rem">
            MongoDB
          </Text>
        </Box>
      </Grid>
    </Stack>
  );
};
