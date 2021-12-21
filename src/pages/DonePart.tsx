import { Stack, HStack, IconButton, Spacer, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { FiDelete } from "react-icons/fi";
import { Contextall, mycontext, Todo } from "globalstate/mycontext";

export const DonePart = () => {
  const global: Contextall = useContext(mycontext);

  const done = global.state.todoList.filter((todo) => todo.done === true);
  const undonehandler = (todo: Todo): void => {
    global.undonehandler(todo);
  };
  const list = done.map((todo, index) => {
    return (
      <HStack
        width="90%"
        p="1em"
        border="1px solid teal"
        borderRadius="1em"
        key={index}
      >
        <Text>{todo.work}</Text>
        <Spacer />
        <IconButton
          aria-label="done"
          size="sm"
          icon={<IoReturnUpBack />}
          bg="yellow.300"
          onClick={()=>undonehandler(todo)}
        />
        <IconButton
          aria-label="delete"
          size="sm"
          icon={<FiDelete />}
          bg="red"
          onClick={()=>{global.delhandler(todo)}}
        />
      </HStack>
    );
  });
  return (
    <>
      <Stack
        mt={5}
        spacing="2"
        flexDirection="column"
        alignItems="center"
        width="100%"
      >
        {list}
      </Stack>
    </>
  );
};
