import React from "react";
import {
  HStack,
  useRadioGroup,
  useRadio,
  Box,
  Center,
  Text,
  Heading,
  Divider,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import QuestionCard from "./QuestionCard";
import QuestionBar from "./QuestionBar";

export default function QuestionPage() {
  const options = [
    {
      url: "https://www.youtube.com/embed/3wIiujOP6Ag?controls=0&rel=0",
      choice: "A",
      answer: "A",
    },
    {
      url: "https://www.youtube.com/embed/XLv8TfJs_Ds?controls=0&rel=0&",
      choice: "B",
      answer: "A",
    },
    {
      url: "https://www.youtube.com/embed/a-Osh2Thjxc?controls=0&rel=0&",
      choice: "C",
      answer: "A",
    },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <Flex h="100vh" w="100vw" direction="column">
      <Box w="100vw">
        <Box h="20">
          <Flex>
            <Button bg={"red.500"} color={"white"} m={5}>
              Exit
            </Button>
            <Spacer />
            <Flex _horizontal={1} m={5}>
              <Heading>Question1 Text-Sign</Heading>
            </Flex>
            <Spacer />
            <Box w="180px" h="10" />
          </Flex>
        </Box>

        <Box pl={10} pr={10} pt={10} pb={5}>
          <Text fontSize="28px">
            Which of the following the sign language for apple?
          </Text>
        </Box>
        <Center>
          <Box>
            <HStack {...group} width="100%" spacing="5" p={5}>
              {options.map(({ url, choice, answer }) => {
                const radio = getRadioProps({ value: choice });
                return (
                  <QuestionCard
                    key={url}
                    {...radio}
                    url={url}
                    choice={choice}
                    answer={answer}
                  />
                );
              })}
            </HStack>
          </Box>
        </Center>
        <Center>
          <QuestionBar />
        </Center>
        <Divider borderWidth="1px" opacity="1" />
      </Box>
      <Box flex="1" p={5}>
        <Center h="full">
          <Flex justify="space-around" w="full">
            <Button bgColor="red.500" color="white">
              Give up
            </Button>
            <Button bgColor="blue.500" color="white">
              Submit
            </Button>
          </Flex>
        </Center>
      </Box>
    </Flex>
  );
}
