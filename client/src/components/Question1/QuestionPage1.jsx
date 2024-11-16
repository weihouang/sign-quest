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
import QuestionCard1 from "./QuestionCard1";
import QuestionBar from "../Question/QuestionBar";

export default function QuestionPage1() {
  const options = [
    {
      url: "https://i2.s3stores.com/images/EDR/preview_3b7c775103fa9178cacb99839dd9f01e.jpeg",
      choice: "A",
    },
    {
      url: "https://st2.depositphotos.com/2485347/7287/v/950/depositphotos_72872485-stock-illustration-cartoon-bunch-of-bananas.jpg",
      choice: "B",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzfAnN4KQwaL2Dly1G601NOgS_FCUXyVbTjQ&usqp=CAU",
      choice: "C",
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
              <Heading>Question1 Sign-Texts</Heading>
            </Flex>
            <Spacer />
            <Box w="180px" h="10" />
          </Flex>
        </Box>

        <Box pl={10} pr={10} pt={5} pb={5}>
          <Text fontSize="28px" mb={10}>
            Which of the following is shown by the video?
          </Text>
          <Flex _horizontal={1}>
            <iframe
              width="400"
              height="300"
              src="https://www.youtube.com/embed/3wIiujOP6Ag?rel=0"
              title="APPLE"
            ></iframe>
            <HStack {...group} width="100%" spacing="10" p={5} ml={20}>
              {options.map(({ url, choice }) => {
                const radio = getRadioProps({ value: choice });
                return (
                  <QuestionCard1
                    key={url}
                    {...radio}
                    url={url}
                    choice={choice}
                  />
                );
              })}
            </HStack>
          </Flex>
        </Box>
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
