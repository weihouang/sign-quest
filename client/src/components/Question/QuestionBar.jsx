import React, { useState } from "react";
import { Box, Button, Center, Text } from "@chakra-ui/react";

export default function QuestionBar({ given }) {
  const [length, setLength] = useState(given);

  const increaseLength = () => {
    if (length + 5 > 100) {
      setLength(0);
    } else {
      setLength(length + 5);
    }
  };

  return (
    <Box
      w="100%"
      fontFamily={"Comic Sans MS, Comic Sans, cursive	"}
      fontWeight={"bold"}
    >
      <Center p={"0.2em"}>
        <Box
          w="70%"
          backgroundColor="gray.200"
          borderRadius={20}
          border={"0.2em solid"}
          borderColor={"white"}
        >
          <Box
            bgGradient="linear(to-r, green.200, pink.500)"
            w={`${length}%`}
            h="5"
            borderRadius="20px"
          ></Box>
        </Box>
        <Box w={100}>
          <Text p={4}>+{length} Exp</Text>
        </Box>
      </Center>
    </Box>
  );
}
