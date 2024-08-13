import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Select,
  Stack,
} from "@chakra-ui/react";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { TodosType } from "../types/TodosType";
import { useTodos } from "../hooks/useTodos";
import PrimaryButton from "./PrimaryButton";

type Props = {
  editTodo: TodosType;
  isOpen: boolean;
  onClose: () => void;
};

const TodoDetailModal: FC<Props> = React.memo((props) => {
  const { todos, setTodos, statusLabels, defaultTodo } = useTodos();
  const { editTodo, isOpen, onClose } = props;
  const [todoDetail, setTodoDetail] = useState<TodosType>(defaultTodo);

  useEffect(() => {
    setTodoDetail({
      id: editTodo.id,
      title: editTodo.title,
      createDate: editTodo.createDate,
      updateDate: editTodo.updateDate,
      status: editTodo.status,
    });
  }, [editTodo]);

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setTodoDetail((prevTodoDetail) => ({
      ...prevTodoDetail,
      title: e.target.value,
    }));

  const onChangeStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedKey = e.target.value as TodosType["status"];
    setTodoDetail((prevTodoDetail) => ({
      ...prevTodoDetail,
      status: selectedKey,
    }));
  };

  const onUpdate = () => {
    if (todoDetail.title === "") {
      alert("タスクを入力してください");
      return;
    }

    const newTodos = todos.map((todo) => {
      if (todo === editTodo) {
        return {
          ...todoDetail,
          updateDate: new Date().toLocaleDateString("sv-SE"),
        };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
    onClose();
  };

  const onCancel = () => {
    setTodoDetail(editTodo);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalBody>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>タイトル</FormLabel>
              <Input value={todoDetail.title} onChange={onChangeTitle} />
            </FormControl>
            <FormControl>
              <FormLabel>ステータス</FormLabel>
              <Select value={todoDetail.status} onChange={onChangeStatus}>
                {Object.entries(statusLabels).map(([key, value]) => {
                  if (key !== "all") {
                    return (
                      <option key={key} value={key}>
                        {value.label}
                      </option>
                    );
                  }
                })}
              </Select>
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Flex gap={2}>
            <PrimaryButton bg="blue.400" onClick={onUpdate}>
              更新
            </PrimaryButton>
            <PrimaryButton bg="red.400" onClick={onCancel}>
              キャンセル
            </PrimaryButton>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});

export default TodoDetailModal;
