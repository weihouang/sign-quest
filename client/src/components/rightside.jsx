import React, { useState } from 'react';
import { VStack, Box, Button, Avatar, Text } from '@chakra-ui/react';

const RightSide = () => {
  const [showFollowers, setShowFollowers] = useState(false);

  const handleButtonClick = () => {
    setShowFollowers(!showFollowers);
  };

  // Dummy data for followers and following
  const followers = [
    { id: 1, name: 'Follower 1', profilePicture: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Follower 2', profilePicture: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Follower 3', profilePicture: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Follower 4', profilePicture: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Follower 5', profilePicture: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Follower 6', profilePicture: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Follower 7', profilePicture: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Follower 8', profilePicture: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Follower 9', profilePicture: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Follower 10', profilePicture: 'https://via.placeholder.com/150' },
  ];

  const following = [
    { id: 1, name: 'Following 1', profilePicture: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Following 2', profilePicture: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Following 3', profilePicture: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Following 4', profilePicture: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Following 5', profilePicture: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Following 6', profilePicture: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Following 7', profilePicture: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Following 8', profilePicture: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Following 9', profilePicture: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Following 10', profilePicture: 'https://via.placeholder.com/150' },
  ];

  return (
    <Box
      marginTop={50}
      marginLeft={-30}
      borderWidth="2px"
      borderStyle="solid"
      borderColor="gray.200"
      borderRadius="2xl"
      p="4"
      w="400px"
      h="400px"
      position="relative"
      overflowY="auto" // Allow vertical scrolling for the content inside VStack
    >
      <Box position="sticky" top="-5" left="0" right="0" bg="white" zIndex="1" display="flex">
        <Button
          onClick={handleButtonClick}
          w="50%"
          h="60px"
          bg="transparent"
          border="none"
          borderBottom={showFollowers ? "1px solid #0066ff" : "1px solid lightgray"}
          color={showFollowers ? "#0066ff" : "gray"}
          fontWeight="bold"
          textAlign="center"
          lineHeight="60px"
        >
          Following
        </Button>
        <Button
          onClick={handleButtonClick}
          w="50%"
          h="60px"
          bg="transparent"
          border="none"
          borderBottom={showFollowers ? "1px solid lightgray" : "1px solid #0066ff"}
          color={showFollowers ? "gray" : "#0066ff"}
          fontWeight="bold"
          textAlign="center"
          lineHeight="60px"
        >
          Followers
        </Button>
      </Box>
      <VStack spacing={4} align="flex-start" p="2" mt="60px">
        {showFollowers
          ? followers.map((follower) => (
              <Box key={follower.id} w="100%" bg="white" p={2}>
                <Avatar src={follower.profilePicture} size="lg" />
                <Text ml={2}>{follower.name}</Text>
              </Box>
            ))
          : following.map((follow) => (
              <Box key={follow.id} w="100%" bg="white" p={2}>
                <Avatar src={follow.profilePicture} size="lg" />
                <Text ml={2}>{follow.name}</Text>
              </Box>
            ))}
      </VStack>
    </Box>
  );
};

export default RightSide;
