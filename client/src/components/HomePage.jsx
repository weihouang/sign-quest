import React from "react";
import {
  Box,
  Flex,
  Heading,
  Button,
  Image,
  Select,
  VStack,
  Spacer,
  Text,
  Container,
} from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import SplineViewer from "./HomePageViewer.jsx"; // Import the SplineViewer component

function HomePage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box position="relative" minH="100vh" width="full">
      {/* Spline Viewer as Background */}
      <Box
        position="absolute"
        top="0"
        left="0"
        height="100%"
        width="100%"
        zIndex="-1"
      >
        <SplineViewer />
      </Box>

      {/* Overlay Content */}
      <Container maxW="full" p={0} m={0}>
        <Flex align="center" justify="space-between" p="2em">
          <Image
            src="https://cdn.iconscout.com/icon/free/png-256/free-sign-language-1427641-1207032.png"
            alt="Logo"
            h="50px"
          />
          <Text as="b">Handshake</Text>
          <Spacer />
          <Select placeholder="English(US)" w="auto">
            <option value="en">English(US)</option>
            <option value="en-uk">English(UK)</option>
            <option value="zh">Chinese</option>
          </Select>
        </Flex>
      </Container>

      <VStack mt={48} justify="center" align="center" spacing={4} p={4}>
        <Heading as="h1" size="2xl" textAlign="center" color="purple.900">
          A free and fun way to learn sign language!
        </Heading>
        <Button
          size="lg"
          onClick={() => loginWithRedirect()}
          colorScheme="purple" // This can still control text color if needed
          variant="ghost" // Makes the button have a transparent background but keeps the hover and active styles.
          _hover={{ bg: "purple.100", color: "purple.900" }} // Optional: customize hover state
          _active={{ bg: "purple.200", color: "purple.900" }} // Optional: customize active state
        >
          Get Started
        </Button>
      </VStack>
    </Box>
  );
}

export default HomePage;
