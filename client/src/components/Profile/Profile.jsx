import React from "react";
import Sidebar from "../SideBar.jsx"; // Assuming you might use it as well
import PlayerProfile from "./PlayerProfile.jsx";
import RightSide from "./rightside.jsx"; // Assuming you might want to include it later
import { Box } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileViewer from "./ProfileViewer.jsx"; // Your Spline Viewer component
import PlaygroundViewer from "../Playground/PlaygroundViewer.jsx";

export default function Profile() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Box w={"100vw"} h={"100vh"}>
      <Box w={"100vw"} h={"100vh"} position={"absolute"} left={"0%"}>
        <PlaygroundViewer />
      </Box>
      <PlayerProfile />
    </Box>
  );
}
