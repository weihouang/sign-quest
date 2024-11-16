import React, { useState } from "react";
import {
  Box,
  VStack,
  Text,
  Image,
  Center,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

const signs = [
  {
    name: "I Love You",
    imageUrl: "https://www.lifeprint.com/asl101/images-signs/i_love_you.jpg",
  },
  {
    name: "Peace",
    imageUrl:
      "https://img.freepik.com/premium-vector/hand-with-two-fingers-up-victory-peace-symbol-letter-v-sign-language-scissors-gesture_544745-111.jpg?w=996",
  },
  {
    name: "Stop",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/026/788/109/non_2x/stop-hand-gesture-body-language-for-communication-vector.jpg",
  },
  {
    name: "Rock",
    imageUrl: "https://i.ebayimg.com/images/g/dSUAAOSw4BVgIsMd/s-l1200.webp",
  },
];

const SignLanguageLearning = () => {
  const [currentSignIndex, setCurrentSignIndex] = useState(0);

  const setCurrentSign = (index) => {
    setCurrentSignIndex(index);
  };

  const currentSign = signs[currentSignIndex];

  return (
    <Center w="100%" h="100%" flexDirection="column" backgroundColor={"pink"}>
      <VStack spacing={4} marginBottom="4">
        <Text fontSize="4rem" fontWeight="bold">
          Learning Session
        </Text>
        <Image src={currentSign.imageUrl} boxSize="25rem" />
        <Text fontSize="5xl">{currentSign.name}</Text>
      </VStack>
      <ButtonGroup isAttached variant="outline">
        {signs.map((sign, index) => (
          <Button
            key={index}
            onClick={() => setCurrentSign(index)}
            colorScheme="teal"
            variant={currentSignIndex === index ? "solid" : "ghost"}
          >
            {sign.name}
          </Button>
        ))}
      </ButtonGroup>
    </Center>
  );
};

export default SignLanguageLearning;
