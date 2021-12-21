import {
  VStack,
  Center,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Contextall, mycontext } from "globalstate/mycontext";
import React, { Dispatch, SetStateAction, useContext, useState } from "react";
interface props {
  displaynone: Dispatch<SetStateAction<boolean>>;
}

export const AddInput: React.FC<props> = ({ displaynone }) => {
  const [addtodo, setaddtodo] = useState("");
  const global: Contextall = useContext(mycontext);
  const addhandler = () => {
    global.Addhandler({ work: addtodo, done: false, id: 1 });
    displaynone(false);
  };
  return (
    <Center
      position="fixed"
      left="0"
      top="0"
      bottom="0"
      right="0"
      bg="rgba(0,0,0,0.5)"
    >
      <VStack
        width="80%"
        height="30%"
        bg="white"
        borderRadius="10px"
        shadow="md"
        spacing={5}
        justifyContent="center"
        alignItems="center"
      >
        <FormControl width="70%">
          <FormLabel textAlign="center">what is the work:</FormLabel>
          <Input
            value={addtodo}
            onChange={(e) => {
              setaddtodo(e.target.value);
            }}
          />
        </FormControl>
        <HStack spacing={50}>
          <Button bg="green.500" color="white" onClick={addhandler}>
            Add
          </Button>
          <Button bg="red.600" color="white" onClick={() => displaynone(false)}>
            Cancel
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
};
