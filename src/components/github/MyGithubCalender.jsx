import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

export const MyGithubCalender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();

    return contributions.filter((day) => {
      const date = new Date(day.date);

      return date.getFullYear() <= currentYear;
    });
  };

  return (
    <Box w="100%" h="auto" bg="#070640" zIndex={3}>
      <Box py="30px" color="#ffffff" w="100%" maxWidth="1200px" m="auto">
        <Text textAlign="center" fontWeight="medium" fontSize={30} mb={30}>
          Git Hub Calendar
        </Text>
        <Flex px="10px" alignItems="center" justifyContent="center">
          <GitHubCalendar
            username="Sandipmaury"
            transformData={selectLastHalfYear}
          />
        </Flex>
      </Box>
    </Box>
  );
};
