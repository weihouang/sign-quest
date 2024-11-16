import { Box, ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Profile from "./components/Profile/Profile.jsx";
import HomePage from "./components/HomePage.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import Sidebar from "./components/SideBar.jsx";
import Playground from "./components/Playground/Playground.jsx";
import VideoComponent from "./components/VideoComponent/VideoComponent.jsx";
import { Signimage, Signpass } from "./components/VideoComponent/handImage";
import Handsigns from "./components/VideoComponent/handSigns";
import ExampleComponent from "./components/Learn/ExampleComponent.jsx";
import EndScreen from "./components/Playground/EndScreen.jsx";
import NewLearn1 from "./components/Learn/NewLearn1.jsx";

export default function App() {
  const letterSignList = [Signpass[4], Signpass[28], Signpass[9]];
  const wordSignList = [Signpass[3], Signpass[2], Signpass[1]];

  const { isAuthenticated, isLoading } = useAuth0();
  const showSidebar =
    isAuthenticated &&
    !["/video/letter", "/video/word", "/playground"].includes(
      location.pathname
    );
  if (isLoading) {
    return <Box color={"black"}>Is loading...</Box>;
  }
  return (
    <ChakraProvider>
      <Box display={"flex"} width={"100vw"} height={"100vh"}>
        {showSidebar && (
          <Box w="20%" h="full">
            <Sidebar />
          </Box>
        )}
        <Routes>
          <Route path="/" element={!isAuthenticated && <HomePage />} />
          <Route
            path="/home"
            element={isAuthenticated ? <Playground /> : <HomePage />}
          />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <HomePage />}
          />
          <Route
            path="/learn"
            element={isAuthenticated ? <NewLearn1 /> : <HomePage />}
          />
          <Route path="/endscreen" element={<EndScreen></EndScreen>} />

          <Route
            path="/video/letter"
            element={
              <VideoComponent
                allSigns={["aSign", "ySign", "fSign"]}
                Handsigns={Handsigns}
                signImage={Signimage}
                signList={letterSignList}
              />
            }
          />
          <Route
            path="/video/word"
            element={
              <VideoComponent
                allSigns={["stopGesture", "peaceGesture", "rockGesture"]}
                Handsigns={Handsigns}
                signImage={Signimage}
                signList={wordSignList}
              />
            }
          />
        </Routes>
      </Box>
    </ChakraProvider>
  );
}
