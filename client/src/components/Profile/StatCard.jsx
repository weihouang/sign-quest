import React from "react";
import { Box, Text, Center, Flex, Icon } from "@chakra-ui/react";

export default function StatCard({ stat, category, icon }) {
  // Define theme colors for the stat card
  const borderColor = "pink.400"; // A soft pink border
  const statColor = "white"; // Dark green for the stat number for better readability
  const categoryColor = "pink.500"; // A softer pink for the category text

  return (
    <Center
      h="100px"
      w="100%"

      borderRadius="xl"

      p="4"
      bgColor="rgba(255, 255, 255, 0.5)"
    >
      <Flex direction="column" align="center" justify="center">
        <Flex align="center">
          {/* Render the passed icon */}
          {icon && <Icon as={icon} w={6} h={6} color={statColor} mr="2" />}
          <Text fontSize="xl" fontWeight="bold" color={statColor}>
            {stat}
          </Text>
        </Flex>
        <Text fontSize="sm" color={categoryColor}>
          {category}
        </Text>
      </Flex>
    </Center>
  );
}
