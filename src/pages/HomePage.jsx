import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { AboutMe } from "../components/AboutMe";
import { ProfileImg } from "../components/ProfileImg";

function HomePage() {
  const isLoding = useSelector((store) => store.isLoding);

  return (
    <Stack
      h="100%"
      w="100%"
      alignItems="center"
      direction={["column-reverse", "column-reverse", "column-reverse", "row"]}
      overflowY="auto"
    >
      {isLoding ? (
        <Skeleton>
          <AboutMe />
          <ProfileImg />
        </Skeleton>
      ) : (
        <>
          <AboutMe />
          <ProfileImg />
        </>
      )}
    </Stack>
  );
}

export default HomePage;
