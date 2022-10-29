import { Box, Stack, useColorMode } from "@chakra-ui/react";
import Footer from "./components/Footer";
import { Links } from "./components/Links";
import { AllRoutes } from "./pages/AllRoutes";
import Navbar from "./components/navbar/Navbar";

function App() {
  const { colorMode } = useColorMode();
  return (
    <Stack
      w="100vw"
      h="100vh"
      bg={colorMode === "dark" ? "#2d333b" : "#f2f0ee"}
      transition="0.3s"
    >
      <Stack
        maxW="1150px"
        w="100%"
        maxH={["100%", "100%", "100%", "90%"]}
        h="100%"
        borderRadius="7px"
        bg={colorMode === "dark" ? "#1c2128" : "white"}
        margin="auto"
        boxShadow="lg"
        transition="0.3s"
        color={colorMode === "dark" ? "white" : "black"}
        p="30px"
        direction="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Navbar />
        <Stack
          zIndex="5"
          gap={["10px", "10px", "30px", "30px"]}
          h={["90%", "90%", "90%", "80%"]}
          w="100%"
          direction={["column-reverse", "column-reverse", "row", "row"]}
        >
          <Links />
          <Box w="100%" h={["90%", "90%", "100%", "100%"]}>
            <AllRoutes />
          </Box>
        </Stack>
        <Footer />
      </Stack>
    </Stack>
  );
}

export default App;
