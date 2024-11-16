import React from "react";
import {
  Box,
  Icon,
  Center,
  VStack,
  Stack,
  Divider,
  Text,
} from "@chakra-ui/react";
import Player from "./Player";
import { FaTrophy } from "react-icons/fa";

export default function Leaderboard() {
  return (
    <Box h={"100vh"} w={{ base: "full", md: 60 }} boxShadow="lg">
      <VStack spacing={5} align="stretch">
        <Box mt={5}>
          <Center>
            <Icon mr={2} as={FaTrophy} fontSize={"24"} color={""} />
            <Text fontSize={"24"}>Leaderboard</Text>
          </Center>
        </Box>
        <Divider />
        <Stack direction="column" as="nav" spacing={0}>
          <Player name="Willy Weak" places="1" score="192" />
          <Player
            name="Licker Dog"
            places="2"
            score="183"
            avatar="https://media.alwayspets.com/58/d6/58d6dcb3765546d0a8248c632f02b664.jpeg"
          />
          <Player name="Alex Ni" places="3" score="124" avatar="" />
          <Player
            name="Nick HAA"
            places="4"
            score="89"
            avatar="https://images.hobbydb.com/processed_uploads/subject_photo/subject_photo/image/37012/1518467482-3845-9947/Tom_20Cat_20_Tom_20And_20Jerry__large.jpg"
          />
          <Player name="Willy Weak" places="5" score="53" />
          <Player name="Willy Weak" places="5" score="41" />
          <Player name="Willy Weak" places="6" score="20" />
          <Player name="Willy Weak" places="7" score="10" />
          <Player name="Willy Weak" places="8" score="1" />
        </Stack>
      </VStack>
    </Box>
  );
}
