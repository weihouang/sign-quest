import React from "react";
import { Box } from "@chakra-ui/react";

import PlaygroundViewer from "../Playground/PlaygroundViewer";
export default function NewLearn1() {
  return (
    <Box h={"100vh"} w={"100vw"} position={"absolute"}>
      <PlaygroundViewer></PlaygroundViewer>
      <Box
        position={"relative"}
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
    </Box>
  );
}
