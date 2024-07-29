import { Flex, Td, Tr } from "@chakra-ui/react";
import React, { FC, useCallback } from "react";
import { TodosType } from "../types/TodosType";
import { useTodos } from "../hooks/useTodos";
import { BlueButton } from "./button/BlueButton";
import { RedButton } from "./button/RedButton";

type Props = {
  todo: TodosType;
  onClick: (id: number) => void;
};

const TableRow: FC<Props> = React.memo((props) => {
  const { todo, onClick } = props;
  const { todos, setTodos, statusLabels } = useTodos();

  const getStatusLabel = useCallback(
    (status: TodosType["status"]): string => {
      return statusLabels[status]["label"];
    },
    [statusLabels]
  );

  const getRowColor = useCallback(
    (status: TodosType["status"]): string => {
      return statusLabels[status]["rowColor"];
    },
    [statusLabels]
  );

  const onClickRemoveAction = (id: number) => {
    let tempIds: number = 1;
    const newTodos: Array<TodosType> = todos
      .filter((todo) => todo.id !== id)
      .map((todo) => {
        todo.id = tempIds++;
        return todo;
      });
    setTodos(newTodos);
  };

  return (
    <Tr bg={getRowColor(todo.status)}>
      <Td textAlign="center">{todo.id}</Td>
      <Td textAlign="center">{todo.title}</Td>
      <Td textAlign="center">{getStatusLabel(todo.status)}</Td>
      <Td textAlign="center">{todo.createDate}</Td>
      <Td textAlign="center">{todo.updateDate}</Td>
      <Td>
        <Flex gap={2} justify="center">
          <BlueButton onClick={() => onClick(todo.id)}>編集</BlueButton>
          <RedButton onClick={() => onClickRemoveAction(todo.id)}>
            削除
          </RedButton>
        </Flex>
      </Td>
    </Tr>
  );
});

export default TableRow;
