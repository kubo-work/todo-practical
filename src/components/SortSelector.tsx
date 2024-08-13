import { Flex, Heading, Select, Stack } from "@chakra-ui/react";
import React, { FC } from "react";
import { SordIdStatusType } from "../types/SordIdStatusType";
import { useFilterTodos } from "../hooks/useFilterTodos";

const sortIdLabel: SordIdStatusType = {
  asc: "昇順",
  desc: "降順",
};

const SortSelector: FC<Record<string, never>> = React.memo(() => {
  const {
    onChangeSelect,
    filterStatus,
    onChangeFilterStatus,
    statusLabels,
    sortIdStatus,
  } = useFilterTodos();

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
