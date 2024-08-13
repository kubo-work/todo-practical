import { ChakraProvider, Flex, Stack } from "@chakra-ui/react";
import { TodoProviders } from "./providers/TodoProviders";
import InsertTodo from "./components/InsertTodo";
import TodosList from "./components/TodosList";
import HeaderLayout from "./components/HeaderLayout";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <TodoProviders>
      <ChakraProvider>
        <Stack p="4" spacing={4}>
          <HeaderLayout />
          <Flex gap={6} align="center" justify="center" p={4}>
            <InsertTodo />
            <SortSelector />
          </Flex>
          <TodosList />
        </Stack>
      </ChakraProvider>
    </TodoProviders>
  );
}

export default App;
