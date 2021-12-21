import {
  VStack,
  Center,
  FormControl,
  Input,
  HStack,
  Button,
} from "@chakra-ui/react";
import { editstate } from "pages/TodoPart";
import { Contextall, mycontext } from "globalstate/mycontext";
import React, { Dispatch, SetStateAction, useContext, useState } from "react";
interface props {
  edittodo:editstate,
  displaynone: Dispatch<SetStateAction<editstate>>;
}

export const EditInput: React.FC<props> = ({ displaynone , edittodo }) => {
  const [editing, setediting] = useState(edittodo.todos.work);
  const global: Contextall = useContext(mycontext);
  const edithandler = () => {
    const newedit=edittodo;
    newedit.todos.work=editing;
    global.edithandler(newedit.todos);
    displaynone({isopen:false,todos:edittodo.todos});
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
          <Input
            value={editing}
            onChange={(e:any) => {
              setediting(e.target.value);
            }}
          />
        </FormControl>
        <HStack spacing={50}>
          <Button bg="green.500" color="white" onClick={edithandler}>
            Edit
          </Button>
          <Button bg="red.600" color="white" onClick={() => displaynone({isopen:false,todos:edittodo.todos})}>
            Cancel
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
};
