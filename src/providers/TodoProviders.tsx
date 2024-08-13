import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import { TodosType } from "../types/TodosType";
import { TodosStatusType } from "../types/TodosStatusType";

export type TodosContextType = {
  todos: Array<TodosType>;
  setTodos: Dispatch<SetStateAction<Array<TodosType>>>;
  defaultTodo: TodosType;
  statusLabels: TodosStatusType;
  filterTodos: Array<TodosType>;
  setFilterTodos: Dispatch<SetStateAction<Array<TodosType>>>;
};

export const TodosContent = createContext<TodosContextType>(
  {} as TodosContextType
);

export const TodoProviders = (props: { children: ReactNode }) => {
  const { children } = props;
  const [todos, setTodos] = useState<Array<TodosType>>([]);
  const [filterTodos, setFilterTodos] = useState<Array<TodosType>>([]);
  const defaultTodo: TodosType = useMemo(() => {
    return {
      id: 0,
      title: "",
      status: "notStarted",
      createDate: "",
      updateDate: "-",
    };
  }, []);

  const statusLabels: TodosStatusType = useMemo(() => {
    return {
      all: {
        label: "全て",
        rowColor: "white",
      },
      notStarted: {
        label: "未着手",
        rowColor: "yellow.200",
      },
      inProgress: {
        label: "進行中",
        rowColor: "blue.200",
      },
      done: {
        label: "完了",
        rowColor: "green.200",
      },
    };
  }, []);

  return (
    <TodosContent.Provider
      value={{
        todos,
        setTodos,
        defaultTodo,
        statusLabels,
        filterTodos,
        setFilterTodos,
      }}
    >
      {children}
    </TodosContent.Provider>
  );
};
