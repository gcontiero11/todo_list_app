import { useContext } from "react";
import { TodoListsContext } from "./TodoListsContext";

export const useTodoListsProvider = () => {
  const context = useContext(TodoListsContext);
  if (!context) {
    throw new Error("hook has been used out of the context scope");
  }
  return context;
};