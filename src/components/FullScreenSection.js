import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack
        maxWidth="1280px"
        minHeight="100vh"
        paddingX={{ base: 4, md: 8 }} // Adjust horizontal padding for different screen sizes
        paddingY={{ base: 8, md: 12 }} // Adjust vertical padding for different screen sizes
        {...boxProps}
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
