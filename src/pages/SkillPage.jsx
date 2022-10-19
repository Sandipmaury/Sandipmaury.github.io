import { Flex, Grid, Image, Stack, Text } from "@chakra-ui/react";

export const SkillPage = () => {
  return (
    <Stack w="100%" direction="column" h="100%" alignItems="center">
      <Text fontSize={["1.5rem", "1.5rem", "2rem", "2rem"]}>
        Skills I have learned
      </Text>
      {/* <Constructor endPoint={"skills"} /> */}
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
        <Flex
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
          boxSize="15rem"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Image
            borderRadius="5px 5px 0px 0px"
            h="80%"
            src="https://media.itpro.co.uk//image/upload/f_auto,t_primary-image-mobile@1/v1611068219/itpro/shutterstock_front-end_developer_infographic.jpg"
          />
          <Text textAlign="center" fontSize="25px">
            Front end
          </Text>
        </Flex>
        <Flex
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
          boxSize="15rem"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Image
            borderRadius="5px 5px 0px 0px"
            h="80%"
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220309002834/7-Skills-to-Become-a-Backend-Developer.png"
          />
          <Text textAlign="center" fontSize="25px">
            Back end
          </Text>
        </Flex>
        <Flex
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
          boxSize="15rem"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Image
            borderRadius="5px 5px 0px 0px"
            h="80%"
            src="https://usamagzine.com/wp-content/uploads/2022/09/Data-Structures-In-Java-.jpeg"
          />
          <Text textAlign="center" fontSize="25px">
            DSA
          </Text>
        </Flex>
        <Flex
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
          boxSize="15rem"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Image
            borderRadius="5px 5px 0px 0px"
            h="80%"
            src="https://lifestyle.cybertecz.in/wp-content/uploads/2021/01/Effective-Communication-Strategies-.jpg"
          />
          <Text textAlign="center" fontSize="25px">
            Communicational skills
          </Text>
        </Flex>
      </Grid>
    </Stack>
  );
};
