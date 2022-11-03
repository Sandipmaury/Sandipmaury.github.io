import { Box } from "@chakra-ui/react";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/Footer";
import { MyGithubCalender } from "./components/github/MyGithubCalender";
import { MyGithubStats } from "./components/github/MyGithubStats";
import { Navbar } from "./components/navbar/Navbar";
import { Projects } from "./components/projects/Projects";
import { TeckStacks } from "./components/teckStacks/TeckStacks";

// color 1. fe3e57, 2.070640, 3.0c0b48 and ffffff
// max width = 1200px

function App() {
  return (
    <Box w="100%" h="auto" minWidth="250px">
      <Navbar />
      <About />
      <TeckStacks />
      <MyGithubStats />
      <MyGithubCalender />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
