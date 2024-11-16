import React, { useState, useEffect } from "react";
import {
  Box,
  Center,
  VStack,
  Heading,
  Text,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { FaClock, FaUser } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileViewer from "./ProfileViewer.jsx";

const Profile = () => {
  const { user } = useAuth0();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:3000/users/user/v1/by-email",
          {
            params: { email: user.email },
          }
        );
        setUserInfo(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getUser();
  }, [user.email]);

  const handleShareClick = () => {
    console.log("Share functionality placeholder");
    // Implement your share functionality here
  };

  return (
    <Box w="80vw" h="100vh" ml={"20%"}>
      <Center
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="1"
      >
        <Box
          bg="rgba(255, 255, 255, 0.8)"
          p="6"
          borderRadius="lg"
          boxShadow="xl"
          position="relative"
          minWidth="360px"
        >
          {/* Centered Share Icon Button */}
          <IconButton
            aria-label="Share Profile"
            icon={<IoShareOutline />}
            isRound
            size="md"
            position="absolute"
            right={4}
            top={4}
            onClick={handleShareClick}
            bg="pink.300" // Adjusted background color
            color="white" // Adjusted icon color
            _hover={{ bg: "pink.200" }}
            _active={{ bg: "pink.400" }}
          />
          <VStack spacing={4} align="stretch">
            {/* Centered Profile Picture */}
            <Center>
              <Image
                src={user.picture || ""}
                alt="Profile Picture"
                borderRadius="full"
                boxSize="120px"
                border="4px solid"
                borderColor="pink.400"
              />
            </Center>
            <Heading as="h3" size="lg" textAlign="center">
              {user.name}
            </Heading>
            <Text fontSize="md" textAlign="left">
              Date Joined: {userInfo?.date_created}
            </Text>
            <Text fontSize="md" textAlign="left">
              Friends: {userInfo?.friends.length}
            </Text>
            <Text fontSize="md" textAlign="left">
              Streak: {userInfo?.streak ?? "N/A"}
            </Text>
            <Text fontSize="md" textAlign="left">
              EXP: {userInfo?.experience ?? "N/A"}
            </Text>
            <Text fontSize="md" textAlign="left">
              Games Played: {userInfo?.games_played ?? "N/A"}
            </Text>
            <Text fontSize="md" textAlign="left">
              Current Level: {userInfo?.current_level ?? "N/A"}
            </Text>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};

export default Profile;
