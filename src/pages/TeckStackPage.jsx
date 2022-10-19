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
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap="2rem"
        overflowY="auto"
        p="10px"
        justifySelf="center"
      >
        <Box
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        >
          <Icon as={FaHtml5} boxSize="15rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="2rem">
            HTML
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        >
          <Icon as={FaCss3Alt} boxSize="15rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="2rem">
            CSS
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        >
          <Icon as={SiJavascript} boxSize="15rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="2rem">
            JavaScript
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        >
          <Icon as={FaNodeJs} boxSize="15rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="2rem">
            NodeJS
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        >
          <Icon as={FaReact} boxSize="15rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="2rem">
            ReactJS
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        >
          <Icon as={SiRedux} boxSize="15rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="2rem">
            Redux
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        >
          <Icon as={SiChakraui} boxSize="15rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="2rem">
            Chakra UI
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        >
          <Icon as={BiGitBranch} boxSize="15rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="2rem">
            Git
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        >
          <Icon as={FaGithub} boxSize="15rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="2rem">
            Github
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        >
          <Icon as={SiCypress} boxSize="15rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="2rem">
            Cypress
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        >
          <Icon as={SiExpress} boxSize="15rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="2rem">
            ExpressJS
          </Text>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        >
          <Icon as={SiMongodb} boxSize="15rem" borderRadius="5px" />
          <Text textAlign="center" fontSize="2rem">
            MongoDB
          </Text>
        </Box>
      </Grid>
    </Stack>
  );
};
