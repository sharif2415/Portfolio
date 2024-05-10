import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <div>
      <HStack spacing={3}>
        <Box
          backgroundColor="white"
          textColor="black"
          rounded="3xl"
          paddingBottom={5}
          width={{ base: "100%", md: "auto" }} // Adjust width for different screen sizes
        >
          <VStack spacing={3} alignItems="stretch">
            <Image src={imageSrc} alt={title} rounded="3xl" />
            <Box paddingX={4} paddingBottom={4} width="100%">
              <Heading paddingY={3} size="md">
                {title}
              </Heading>
              <Text>{description}</Text>
              <HStack spacing={2}>
                <Text fontWeight="bold">See More</Text>
                <FontAwesomeIcon icon={faArrowRight} />
              </HStack>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </div>
  );
};

export default Card;
