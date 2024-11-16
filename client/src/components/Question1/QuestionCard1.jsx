import React from "react";
import { Box, AspectRatio, Text, Image } from "@chakra-ui/react";
import { HStack, useRadioGroup, useRadio, Center } from "@chakra-ui/react";

const QuestionCard = (props) => {
  const { getInputProps, getRadioProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" w={210}>
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        <Image
          width="100%"
          height="169"
          src={props.url}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{ borderRadius: "5px" }}
        />
        <Center>
          <Text fontSize="4xl">{props.choice}</Text>
        </Center>
      </Box>
    </Box>
  );
};

export default QuestionCard;
