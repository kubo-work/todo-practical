import { useContext } from "react";
import { TodosContent, TodosContextType } from "../providers/TodoProviders";

export const useTodos = (): TodosContextType => useContext(TodosContent)
