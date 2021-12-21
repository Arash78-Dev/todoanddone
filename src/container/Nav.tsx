import React from "react";
import { HStack, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <HStack
        width="100wh"
        height="8vh"
        bg="teal"
        color="whiteAlpha.900"
        spacing="0"
      >
        <Center
          width="50%"
          borderRight="1px solid white"
          height="100%"
          cursor="pointer"
          transition="0.2s"
          _hover={{ bg: "teal.800" }}
        >
          <Link to="/todo" style={{ width: "100%", height: "100%" }}>
            <Center width="100%" height="100%">
              To Do
            </Center>
          </Link>
        </Center>
        <Center
          width="50%"
          cursor="pointer"
          height="100%"
          transition="0.2s"
          _hover={{ bg: "teal.800" }}
        >
          <Link to="/done" style={{ width: "100%", height: "100%" }}>
            <Center width="100%" height="100%">
              Done
            </Center>
          </Link>
        </Center>
      </HStack>
    </>
  );
};
