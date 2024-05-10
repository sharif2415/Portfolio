import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    padding={{ base: 8, md: 16 }} // Adjust padding for different screen sizes
  >
    <Avatar src="https://i.pravatar.cc/150?img=7" size="xl" />{" "}
    {/* Adjust size of Avatar for different screen sizes */}
    <Heading
      as="h1"
      size="lg"
      textAlign="center"
      marginTop={4}
      marginBottom={2}
    >
      {greeting}
    </Heading>
    <VStack spacing={4} textAlign="center">
      <Heading as="h2" size="md">
        {bio1}
      </Heading>
      <Heading as="h2" size="md">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
