import { Box, Flex, Input } from "@chakra-ui/react";
import React, { FC } from "react";
import { useInsertTodos } from "../hooks/useInsertTodos";
import PrimaryButton from "./PrimaryButton";

const InsertTodo: FC<Record<string, never>> = React.memo(() => {
  const { inputText, onChangeInputText, onClickAdd } = useInsertTodos();

  return (
    <Box width="lg">
      <Flex gap={2}>
        <Input
          value={inputText}
          onChange={onChangeInputText}
          placeholder="タスクを入力"
        />
        <PrimaryButton bg="teal.400" onClick={onClickAdd}>
          追加
        </PrimaryButton>
      </Flex>
    </Box>
  );
});
export default InsertTodo;
