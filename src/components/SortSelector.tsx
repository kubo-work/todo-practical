import { Flex, Heading, Select, Stack } from "@chakra-ui/react";
import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";
import { SortIdStatus } from "../types/SordIdStatus";
import { SordIdStatusType } from "../types/SordIdStatusType";
import { useTodos } from "../hooks/useTodos";
import { TodosType } from "../types/TodosType";

const sortIdLabel: SordIdStatusType = {
  asc: "昇順",
  desc: "降順",
};

const SortSelector: FC<Record<string, never>> = React.memo(() => {
  const { todos, statusLabels, setFilterTodos } = useTodos();
  const [sortIdStatus, setSortIdStatus] = useState<SortIdStatus>("asc");
  const [filterStatus, setFilterStatus] = useState<TodosType["status"]>("all");

  const onChangeSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortIdStatus;
    setSortIdStatus(value);
  }, []);

  const onChangeFilterStatus = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value as TodosType["status"];
      setFilterStatus(value);
    },
    []
  );

  useEffect(() => {
    let newTodos: Array<TodosType> = [...todos];
    if ("desc" === sortIdStatus) {
      newTodos = newTodos.toReversed();
    }

    const idSortTodos: Array<TodosType> =
      sortIdStatus === "desc" ? todos.toReversed() : todos;
    newTodos =
      filterStatus !== "all"
        ? idSortTodos.filter((todo) => filterStatus === todo.status)
        : [...newTodos];
    setFilterTodos(newTodos);
  }, [todos, sortIdStatus, filterStatus, setFilterTodos]);

  return (
    <Stack>
      <Flex justify="center" gap={4}>
        <Flex align="center" gap={2}>
          <Heading fontSize="2xl">ID:</Heading>
          <Select value={sortIdStatus} onChange={onChangeSelect} width={200}>
            {Object.entries(sortIdLabel).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </Select>
        </Flex>
        <Flex align="center" gap={2}>
          <Heading fontSize="2xl">フィルター:</Heading>
          <Select
            value={filterStatus}
            onChange={onChangeFilterStatus}
            width={200}
          >
            {Object.entries(statusLabels).map(([key, value]) => (
              <option key={key} value={key}>
                {value.label}
              </option>
            ))}
          </Select>
        </Flex>
      </Flex>
    </Stack>
  );
});

export default SortSelector;
