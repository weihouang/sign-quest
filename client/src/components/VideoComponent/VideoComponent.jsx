import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import { nextFrame } from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import * as fp from "fingerpose";
import { Box, Text, Heading, Image, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import EndScreen from "../Playground/EndScreen";
export default function VideoComponent({
  allSigns,
  signList,
  signImage,
  Handsigns,
}) {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const [sign, setSign] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);

  let currentSign = 0;

  const runCoco = async () => {
    const net = await handpose.load();
    setInterval(() => {
      detect(net);
    }, 10.0);
  };

  const detect = async (net) => {
    if (webcamRef.current && webcamRef.current.video.readyState === 4) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
      const hand = await net.estimateHands(video);
      if (hand.length > 0) {
        const ctx = canvasRef.current.getContext("2d");
        drawHand(hand, ctx);

        const GE = new fp.GestureEstimator(
          allSigns.map((sign) => Handsigns[sign])
        );

        if (isWaiting) return;

        const estimatedGestures = await GE.estimate(hand[0].landmarks, 6.5);
        if (
          estimatedGestures.gestures !== undefined &&
          estimatedGestures.gestures.length > 0
        ) {
          const confidence = estimatedGestures.gestures.map((p) => p.score);

          const maxConfidence = confidence.indexOf(Math.max(...confidence));
          if (
            typeof signList[currentSign].src === "string" ||
            signList[currentSign].src instanceof String
          ) {
            if (
              signList[currentSign].alt ===
              estimatedGestures.gestures[maxConfidence].name
            ) {
              setSign((sign) => sign + 1);
              currentSign++;
              if (currentSign == allSigns.length) {
                navigate("/endscreen");
              }
              setIsWaiting(true);
              setTimeout(() => {
                setIsWaiting(false);
              }, 3);
            }
          }
        }
      }
    }
  };

  const fingerJoints = {
    thumb: [0, 1, 2, 3, 4],
    index: [0, 5, 6, 7, 8],
    mid: [0, 9, 10, 11, 12],
    ring: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
  };

  const drawHand = (prediction, ctx) => {
    if (prediction.length > 0) {
      prediction.forEach((prediction) => {
        const landmarks = prediction.landmarks;

        for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
          let finger = Object.keys(fingerJoints)[j];
          for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
            const firstJointIndex = fingerJoints[finger][k];
            const secondJointIndex = fingerJoints[finger][k + 1];

            ctx.beginPath();
            ctx.moveTo(
              landmarks[firstJointIndex][0],
              landmarks[firstJointIndex][1]
            );
            ctx.lineTo(
              landmarks[secondJointIndex][0],
              landmarks[secondJointIndex][1]
            );
            ctx.strokeStyle = "gold";
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }

        for (let i = 0; i < landmarks.length; i++) {
          const x = landmarks[i][0];

          const y = landmarks[i][1];

          ctx.beginPath();
          ctx.arc(x, y, 5, 0, 3 * Math.PI);

          ctx.fillStyle = "navy";
          ctx.fill();
        }
      });
    }
  };

  useEffect(() => {
    runCoco();
  }, []);

  return (
    <Box
      className="App"
      textAlign={"center"}
      width="100vw"
      height="100vh"
      backgroundImage="url('https://media.discordapp.net/attachments/1200291673272496219/1206306807417675826/pastel_romantic_scenery_nature_wallpaper_by_xrebelyellx_dgeewj7-fullview.jpg?ex=65db87c2&is=65c912c2&hm=cf038684916af0316063a63d26b5fa067fd2c1d28f66c611ef619a6e8b7d092b&=&format=webp&width=1868&height=1246')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      overflow="hidden"
    >
      <Flex justifyContent={"center"}>
        <Image
          src={signImage[signList[sign].alt]}
          maxWidth={"100%"}
          height={"auto"}
        />
      </Flex>

      <Heading color={"White"}>Show this sign: {signList[sign].alt}</Heading>
      <Flex
        className="App-header"
        minHeight={"75vh"}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        fontSize={"15px"}
        color={"white"}
        position="relative"
      >
         <Box
      backgroundColor="white"
      margin="auto"
      left={0}
      right={0}
      textAlign="center"
      width="640px"
      height="480px"
      borderRadius="20px"
    >
        </Box>
        <Webcam
          ref={webcamRef}
          muted={true}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
            borderRadius: "20px",
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 10,
            width: 640,
            height: 480,
          }}
        />


      </Flex>
    </Box>
  );
}
