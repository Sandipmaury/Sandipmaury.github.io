import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

export const Items = ({ item }) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      w="95%"
      borderRadius="1rem"
      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15)
      0px 1px 3px 1px"
      overflow="hidden"
      m="auto"
      h="auto"
      my="20px"
      direction={["column", "column", "column", "row"]}
    >
      <Image w={["100%", "100%", "100%", "50%"]} src={item?.img} />
      <Flex direction="column" w="100%" color="black">
        <Box flex="1" px="10px">
          <Text textAlign="center" fontWeight="medium" fontSize="1.5rem">
            {item?.title}
          </Text>
          {<Text textAlign="center">{item?.about}</Text>}
        </Box>

        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <Link
            target="_blank"
            href={item?.deployLink}
            style={{ textDecoration: "none" }}
          >
            <Button
              bg={colorMode === "dark" ? "#2d333b" : "#f2f0ee"}
              boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
              transition="0.3s"
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
              transition="0.3s"
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
      </Flex>
      {/* live and code buttons */}
    </Flex>
  );
};
