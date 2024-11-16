import React from "react";
import { useState } from "react";
import { Box, AspectRatio, Text } from "@chakra-ui/react";
import { HStack, useRadioGroup, useRadio, Center } from "@chakra-ui/react";

export default function QuestionCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getRadioProps();

  const [result, setResult] = useState(props.choice);

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _hover={{ bg: "gray.200" }}
        _checked={{
          ...(props.answer === props.choice
            ? { bg: "green.600", color: "white", borderColor: "teal.600" }
            : { bg: "red.500" }),
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        <iframe
          width="300"
          height="169"
          src={props.url}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{ borderRadius: "5px" }}
        />
        <Center>
          <Text fontSize="4xl" _checked={{}}>
            {props.choice}
          </Text>
        </Center>
      </Box>
    </Box>
  );
}
