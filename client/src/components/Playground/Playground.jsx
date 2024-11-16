import React from "react";
import {
  Box,
  Divider,
  Flex,
  Icon,
  Center,
  Link,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaHandMiddleFinger } from "react-icons/fa";
import { MdOutlineTextFields } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import PlaygroundViewer from "./PlaygroundViewer.jsx";
import { PiMapPinThin } from "react-icons/pi";

export default function Playground() {
  const navigate = useNavigate();

  return (
    <Box w="100%" h="100vh" position={"absolute"} left={"0%"}>
      <>
        <Box
          onClick={() => (window.location.href = "/video/letter")}
          cursor="pointer"
          zIndex="3"
          position={"absolute"}
          top={"16%"}
          left={"33%"}
          h={"13%"}
          w={"13%"}
        >
          <Center h={"full"} w={"full"} position="relative">
            <Box
              borderRadius={"50%"}
              h={"1.3em"}
              w={"1.3em"}
              border={"0.1em solid"}
              borderColor={"white"}
              bg={"blue.600"}
              transition="transform 0.2s, background-color 0.2s"
              _hover={{
                transform: "scale(1.3)",

                cursor: "pointer",
              }}
            ></Box>
          </Center>
        </Box>
        <Box
          onClick={() => (window.location.href = "/video/word")}
          cursor="pointer"
          zIndex="3"
          position={"absolute"}
          top={"30%"}
          left={"42%"}
          h={"10%"}
          w={"2%"}
        ></Box>
      </>
      <>
        <Box
          onClick={() => (window.location.href = "/video/word")}
          cursor="pointer"
          zIndex="3"
          position={"absolute"}
          top={"10%"}
          right={"5%"}
          h={"24%"}
          w={"18%"}
        >
          <Center h={"full"} w={"full"} position="relative">
            <Box
              borderRadius={"50%"}
              h={"1.3em"}
              w={"1.3em"}
              border={"0.1em solid"}
              borderColor={"white"}
              bg={"blue.600"}
              _hover={{
                transform: "scale(1.2)",

                cursor: "pointer",
              }}
              transition="transform 0.2s, background-color 0.2s"
            ></Box>
          </Center>
        </Box>
        <Box
          onClick={() => navigate("/profile")}
          cursor="pointer"
          zIndex="3"
          position={"absolute"}
          top={"35%"}
          right={"22%"}
          h={"23%"}
          w={"4%"}
        ></Box>
        <Box
          onClick={() => navigate("/profile")}
          cursor="pointer"
          zIndex="3"
          position={"absolute"}
          top={"22%"}
          right={"22%"}
          h={"7%"}
          w={"10%"}
          pointerEvents={"none"}
        ></Box>
      </>

      <Box
        w={"full"}
        h={"full"}
        position={"absolute"}
        left={"0%"}
        right={"0%"}
        zIndex="1"
      >
        <PlaygroundViewer />
      </Box>
    </Box>
  );
}
{
}
