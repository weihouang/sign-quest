import React from "react";
import { Box, Flex, Avatar, Center } from "@chakra-ui/react";
export default function Player({ name, avatar, score, places }) {
  const getBackgroundColor = (place) => {
    switch (place) {
      case "1":
        return "yellow";
      case "2":
        return "green.200";
      case "3":
        return "blue.200";
      default:
        return "gray.100";
    }
  };

  return (
    <Box
      bg={getBackgroundColor(places)}
      pt={2}
      pb={2}
      pl={5}
      pr={5}
      borderRadius={5}
    >
      <Flex _horizontal justify="space-between">
        <Flex>
          <Center mr={3} w={3}>
            {places}
          </Center>

          <Center>
            <Avatar name={name} size="sm" src={avatar} mr={1} />
            {name}
          </Center>
        </Flex>

        <Center>{score}</Center>
      </Flex>
    </Box>
  );
}
