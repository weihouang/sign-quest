import React, { useEffect, useState } from "react";
import { Box, Center, Heading, Text, Progress, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import PlaygroundViewer from "./PlaygroundViewer.jsx";
import { FaStar } from "react-icons/fa";
import { VscDebugRestart, VscDebugStart } from "react-icons/vsc";
import { BsFillFastForwardFill } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import { RiCoinFill } from "react-icons/ri";

export default function EndScreen() {
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0); // Initial progress is 0
  const xpEarned = 120;
  const coinsEarned = 50;
  const targetProgress = 60; // Target progress value

  useEffect(() => {
    // Animate progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < targetProgress) {
          return prevProgress + 1; // Increment progress
        }
        clearInterval(interval); // Stop animation when target is reached
        return prevProgress;
      });
    }, 20); // Adjust interval time to control speed of the animation

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [targetProgress]);

  return (
    <Center w="100%" h="100vh" position={"absolute"}>
      <Box w="full" h="full" zIndex="0" position={"absolute"}>
        <PlaygroundViewer />
      </Box>

      <Box
        bg="rgba(255, 255, 255, 0.5)"
        borderRadius="lg"
        boxShadow="xl"
        w="60%"
        h="90%"
        position={"relative"}
        zIndex="10"
      >
        <Center position={"relative"} fontSize={"6em"}>
          <Icon as={FaStar} color={"yellow"} mt={"0.5em"} />
          <Icon as={FaStar} color={"yellow"} />
          <Icon as={FaStar} color={"yellow"} mt={"0.5em"} />
        </Center>

        <Center position={"relative"} h={"20%"} w={"100%"}>
          <Heading fontSize={"4xl"} color={"green.500"}>
            Level 1 Complete!
          </Heading>
        </Center>

        <Box p={4}>
          <Text fontSize={"lg"}>Experience Gained: +{xpEarned}</Text>
          <Progress hasStripe value={progress} colorScheme="green" />
        </Box>

        <Box h={"20%"} w={"100%"}>
          <Center>
            <Icon
              as={RiCoinFill}
              color={"yellow.400"}
              fontSize={"3em"}
              mr={"0.3em"}
            ></Icon>
            <Text
              fontSize={"2em"}
              fontFamily={"Comic Sans MS, Comic Sans, cursive"}
              fontWeight={"bold"}
              color={"yellow.500"}
            >
              +{coinsEarned} Coins
            </Text>
          </Center>
        </Box>

        <Center
          position={"relative"}
          h={"20%"}
          w={"60%"}
          mr={"20%"}
          ml={"20%"}
          display={"flex"}
          justifyContent={"space-evenly"}
        >
          <Center
            borderRadius={"50%"}
            bg={"green.400"}
            p={"0.2em"}
            fontSize={"2.5em"}
            borderColor={"white"}
            color={"white"}
            border={"0.1em solid"}
            _hover={{
              transform: "scale(1.1)",
              bg: "green.600",
              cursor: "pointer",
            }}
            transition="transform 0.2s, background-color 0.2s"
            onClick={() => (window.location.href = "/home")}
          >
            <Icon as={TfiMenuAlt}></Icon>
          </Center>
          <Center
            borderRadius={"50%"}
            bg={"green.400"}
            p={"0.2em"}
            fontSize={"2.5em"}
            borderColor={"white"}
            color={"white"}
            border={"0.1em solid"}
            _hover={{
              transform: "scale(1.1)",
              bg: "green.600",
              cursor: "pointer",
            }}
            transition="transform 0.2s, background-color 0.2s"
            onClick={() => navigate("/")}
          >
            <Icon as={VscDebugRestart}></Icon>
          </Center>
          <Center
            borderRadius={"50%"}
            bg={"green.400"}
            p={"0.2em"}
            fontSize={"2.5em"}
            borderColor={"white"}
            color={"white"}
            border={"0.1em solid"}
            _hover={{
              transform: "scale(1.1)",
              bg: "green.600",
              cursor: "pointer",
            }}
            transition="transform 0.2s, background-color 0.2s"
            onClick={() => navigate("/video/word")}
          >
            <Icon as={BsFillFastForwardFill}></Icon>
          </Center>
        </Center>
      </Box>
    </Center>
  );
}
