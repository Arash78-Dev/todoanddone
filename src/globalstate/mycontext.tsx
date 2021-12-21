import React, { FC, useReducer } from "react";
import { reducer } from "./reducer.";
import { Action } from "./Action";
export interface Todo {
  work: string;
  done: boolean;
  id: number;
}

export type Contextall = {
  state: State;
  Addhandler: (todo: Todo) => void;
  delhandler: (todo: Todo) => void;
  donehandler: (todo: Todo) => void;
  undonehandler: (todo: Todo) => void;
  edithandler: (todo: Todo) => void;
};

export interface State {
  todoList: Todo[];
}

const initialstate: State = {
  todoList: [],
};

export const mycontext = React.createContext<Contextall>({} as Contextall);

export const MycontextP: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const Addhandler = (todo: Todo) => {
    dispatch({ type: Action.ADD, payload: todo });
  };
  const delhandler = (todo: Todo) => {
    dispatch({ type: Action.DELETE, payload: todo });
  };
  const donehandler = (todo: Todo) => {
    dispatch({ type: Action.DONE, payload: todo });
  };
  const undonehandler = (todo: Todo) => {
    dispatch({ type: Action.UNDONE, payload: todo });
  };
  const edithandler = (todo: Todo) => {
    dispatch({ type: Action.EDIT, payload: todo });
  };
  return (
    <mycontext.Provider
      value={{ state, Addhandler, delhandler, donehandler, undonehandler,edithandler }}
    >
      {children}
    </mycontext.Provider>
  );
};
