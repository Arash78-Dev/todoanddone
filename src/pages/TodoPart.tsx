import { Stack, HStack, IconButton, Spacer, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { MdDone } from "react-icons/md";
import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import { FiDelete } from "react-icons/fi";
import { Contextall, mycontext, Todo } from "globalstate/mycontext";
import { AddInput } from "container/ToDoPart/AddInput";
import { EditInput } from "container/ToDoPart/EditInput";
export interface editstate {
  isopen: Boolean;
  todos: Todo;
}
export const ToDoPart = () => {
  const global: Contextall = useContext(mycontext);

  const [addmodal, addmodalset] = useState(false);
  const [addmodaledit, addmodaleditset] = useState<editstate>({
    isopen: false,
    todos: global.state.todoList[0],
  });

  const undone = global.state.todoList.filter((todo) => todo.done === false);
  const deletehandler = (todo: Todo): void => {
    global.delhandler(todo);
  };
  const donetehandler = (todo: Todo): void => {
    global.donehandler(todo);
  };
  const editopen = (todo: Todo) => {
    addmodaleditset({ isopen: true, todos: todo });
  };
  const list = undone.map((todo, index) => {
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
          icon={<MdDone />}
          bg="teal"
          onClick={() => donetehandler(todo)}
        />
        <IconButton
          aria-label="edit"
          size="sm"
          icon={<AiFillEdit />}
          bg="orange"
          onClick={() => editopen(todo)}
        />
        <IconButton
          aria-label="delete"
          size="sm"
          icon={<FiDelete />}
          bg="red"
          onClick={() => {
            deletehandler(todo);
          }}
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

      <IconButton
        aria-label="add"
        icon={<AiOutlinePlus />}
        borderRadius="50%"
        position="fixed"
        bottom="5vh"
        right="5vh"
        colorScheme="telegram"
        onClick={() => {
          addmodalset(true);
        }}
      />

      {addmodal ? <AddInput displaynone={addmodalset} /> : null}
      {addmodaledit.isopen ? (
        <EditInput displaynone={addmodaleditset} edittodo={addmodaledit} />
      ) : null}
    </>
  );
};
