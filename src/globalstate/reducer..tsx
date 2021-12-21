import { Action } from "./Action";
import { State } from "./mycontext";

export interface Actions {
  type: string;
  payload: any;
}
export const reducer: (state: State, action: Actions) => State = (
  state,
  action
) => {
  switch (action.type) {
    case Action.ADD:
      action.payload.id = Date.now();
      const newtodo = state.todoList.concat(action.payload);
      state.todoList = newtodo;
      return state;

    case Action.DELETE:
      const newtodos = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
      state.todoList = newtodos;
      console.log(newtodos);
      const newstate = state;
      newstate.todoList = newtodos;
      console.log(state);
      return { ...state, newstate };

    case Action.DONE:
      const newstates = state;
      newstates.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.done = true;
        }
        return null;
      });
      return { ...state, newstates };

    case Action.EDIT:
      return { ...state };

    case Action.UNDONE:
      const newstatess = state;
      newstatess.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.done = false;
        }
        return null;
      });
      return { ...state, newstatess };

    default:
      return { ...state };
  }
};
