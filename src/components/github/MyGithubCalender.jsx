import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

export const MyGithubCalender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 7;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
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
