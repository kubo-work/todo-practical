import { Table, Tbody, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import React, { FC, useCallback } from "react";
import { useTodos } from "../hooks/useTodos";
import TableRow from "./TableRow";
import { useSelectTodo } from "../hooks/useSelectTodo";
import TodoDetailModal from "./TodoDetailModal";

const TodosList: FC<Record<string, never>> = React.memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { todos, filterTodos } = useTodos();
  const { onSelectTodo, selectTodo } = useSelectTodo();
  const onClickTodo = useCallback(
    (id: number) => {
      onSelectTodo({ id, todos, onOpen });
    },
    [todos, onSelectTodo, onOpen]
  );

  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th textAlign="center">ID</Th>
            <Th textAlign="center">タイトル</Th>
            <Th textAlign="center">ステータス</Th>
            <Th textAlign="center">作成日</Th>
            <Th textAlign="center">更新日</Th>
            <Th textAlign="center">操作</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filterTodos.map((todo) => (
            <TableRow key={todo.id} todo={todo} onClick={onClickTodo} />
          ))}
        </Tbody>
      </Table>
      <TodoDetailModal
        editTodo={selectTodo}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
});

export default TodosList;
