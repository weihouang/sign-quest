import React, { useState } from "react";
import {
  VStack,
  Box,
  Avatar,
  Text,
  InputLeftElement,
  InputGroup,
  Input,
  Divider,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import StatCard from "./StatCard"; // Assuming StatCard is accessible in this context

const RightSide = () => {
  // Dummy data for stat cards, replace with actual data retrieval logic
  const stats = [
    { category: "Streak", stat: "5" },
    { category: "EXP", stat: "1200" },
    { category: "Games Played", stat: "34" },
    { category: "Current Level", stat: "7" },
  ];

  return (
    <Box
      borderWidth="1px"
      borderStyle="solid"
      borderColor="pink.400" // inactiveTabColor
      p="4"
      w={"20%"}
      h="100vh"
      position="relative"
      overflowY="auto"
      bg="white" // bgColor
    >
      <Heading as="h3" size="lg" mb="1rem" color="green.700" align="left">
        Profile Stats
      </Heading>
      <VStack spacing={4} align="flex-start">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            category={stat.category}
            stat={stat.stat}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default RightSide;
