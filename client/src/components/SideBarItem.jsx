import React from "react";
import { Center, Icon, Text, HStack, Box } from "@chakra-ui/react";

export default function SideBarItem({ icon, name, isActive, onClick }) {
  return (
    <Box
      p="0.5rem"
      href="#!"
      _hover={{
        backgroundColor: "red",
        borderRadius: 10,
        cursor: "pointer",
      }}
      backgroundColor={isActive ? "#FFD2D2" : "white"}
      border="1px solid"
      borderColor={"transparent"}
      borderRadius="10"
      onClick={onClick}
    >
      <HStack>
        <Center fontSize="18">
          <Icon as={icon} />
          <Text pl="2">{name}</Text>
        </Center>
      </HStack>
    </Box>
  );
}
