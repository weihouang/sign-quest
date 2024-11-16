import React, { useState } from "react";
import Sidebar from "./SideBar.jsx";
import PlayerProfile from "./PlayerProfile.jsx";
import { Grid, GridItem } from '@chakra-ui/react';
import RightSide from "./rightside.jsx";

export default function Test() {
  return (
    <Grid
      templateAreas={`"header header"
                      "nav content"
                      "nav footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'250px 1fr'}
      h='200px'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem pl='2' area={'nav'}>
        <Sidebar/>
      </GridItem>
      <GridItem pl='2' area={'content'}>
        <Grid
          templateColumns={'1fr 2fr'}
          gap='1'
        >
          <GridItem>
            <PlayerProfile/>
          </GridItem>
          <GridItem  >
            <RightSide/>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
}
