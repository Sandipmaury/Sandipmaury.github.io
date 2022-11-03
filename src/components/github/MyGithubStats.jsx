import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const MyGithubStats = () => {
  return (
    <Box w="100%" h="auto" bg="#0c0b48" zIndex={3}>
      <Box py="30px" color="#ffffff" w="100%" maxWidth="1200px" m="auto">
        <Text textAlign="center" fontWeight="medium" fontSize={30} mb={30}>
          Git Hub Stats
        </Text>
        <Flex
          px="10px"
          alignItems="center"
          justifyContent="space-between"
          gap="20px"
          flexWrap="wrap"
        >
          <Box minW={["200px", "300px", "300px", "300px"]} flex={1}>
            <Image
              w="100%"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=sandipmaury&show_icons=true&locale=en&layout=compact"
              alt="sandipmaury"
            />
          </Box>
          <Box minW={["200px", "300px", "300px", "300px"]} flex={1}>
            <Image
              w="100%"
              src="https://github-readme-stats.vercel.app/api?username=sandipmaury&show_icons=true&locale=en"
              alt="sandipmaury"
            />
          </Box>
          <Box minW={["200px", "300px", "300px", "300px"]} flex={1}>
            <Image
              w="100%"
              src="https://github-readme-streak-stats.herokuapp.com/?user=sandipmaury&"
              alt="sandipmaury"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
