import { Box, Flex, Input } from "@chakra-ui/react";
import React, { ChangeEvent, FC, useCallback, useState } from "react";
import { useTodos } from "../hooks/useTodos";
import { TodosType } from "../types/TodosType";
import { TealButton } from "./button/TealButton";

const InsertTodo: FC<Record<string, never>> = React.memo(() => {
  const [inputText, setInputText] = useState<string>("");
  const { todos, setTodos } = useTodos();
  const onChangeInputText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  const onClickAdd = () => {
    if (inputText === "") return;
    const haveTodoss =
      todos.length > 0
        ? todos.find((todo) => todo.title === inputText)
        : undefined;
    if (haveTodoss) {
      alert(`${inputText}はすでに存在しています`);
      return;
    }
    const newTodos: Array<TodosType> = [
      ...todos,
      {
        id: todos.length + 1,
        title: inputText,
        status: "notStarted",
        createDate: new Date().toLocaleDateString("sv-SE"),
        updateDate: "-",
      },
    ];
    setTodos(newTodos);
    setInputText("");
  };

  return (
    <Box width="lg">
      <Flex gap={2}>
        <Input
          value={inputText}
          onChange={onChangeInputText}
          placeholder="タスクを入力"
        />
        <TealButton onClick={onClickAdd}>追加</TealButton>
      </Flex>
    </Box>
  );
});
export default InsertTodo;
