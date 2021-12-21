import { Box, Button, Center, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

export const Home = () => {
  return (
    <Box
      width="100wh"
      height="100vh"
      backgroundImage="https://cutewallpaper.org/21/4k-phone-wallpapers/Landscape-Backgrounds-4k-Fresh-29-Best-4k-Phone-Wallpapers-.jpg"
    >
      <Center
        width="100%"
        height="100%"
        bg="rgb(0,0,0,0.5)"
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
      >
        <Heading color="green.600">Do your job in time</Heading>
        <Link to="/todo">
          <Button colorScheme="whatsapp" variant="outline">
            Get started
          </Button>
        </Link>
      </Center>
    </Box>
  );
};
