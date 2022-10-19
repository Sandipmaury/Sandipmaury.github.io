import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

export const Items = ({ item }) => {
  const { colorMode } = useColorMode();
  return (
    <Stack
      className="itemBox"
      direction="column"
      justifyContent="space-between"
      w={["100%", "400px", "400px"]}
      h="250px"
      borderRadius="1rem"
      position="relative"
      overflow="hidden"
      boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
    >
      <Image
        borderRadius="1rem 1rem 0rem 0rem"
        w="100%"
        h="80%"
        src={item?.img}
      />
      <Box
        visibility="hidden"
        position="absolute"
        bottom="20%"
        bg="gray.300"
        opacity="0.8"
        w="100%"
        h="0px"
        color="black"
        transition="0.5s"
      >
        <Text w="100%" marginLeft="150%" textAlign="center" fontSize="40px">
          {item?.title}
        </Text>
        {item?.about ? (
          <Text w="100%" textAlign="center" marginLeft="150%">
            {item?.about}
          </Text>
        ) : null}
      </Box>
      {item?.deployLink ? (
        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <Link
            target="_blank"
            href={item?.deployLink}
            style={{ textDecoration: "none" }}
          >
            <Button
              bg={colorMode === "dark" ? "#2d333b" : "#f2f0ee"}
              boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
              _hover={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                padding: "0px 30px",
                transition: "0.3s",
              }}
            >
              Live
            </Button>
          </Link>
          <Text fontWeight="medium">{item?.title}</Text>
          <Link
            target="_blank"
            href={item?.github}
            style={{ textDecoration: "none" }}
          >
            <Button
              bg={colorMode === "dark" ? "#2d333b" : "#f2f0ee"}
              boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
              _hover={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                padding: "0px 30px",
                transition: "0.3s",
              }}
            >
              Code
            </Button>
          </Link>
        </Flex>
      ) : (
        <Text w="100%" textAlign="center" fontSize="30px" pb="20px">
          {item?.title}
        </Text>
      )}
    </Stack>
  );
};
