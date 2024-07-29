import { useCallback, useState } from "react"
import { TodosType } from "../types/TodosType"
import { useTodos } from "./useTodos";

type Props = {
    id: number;
    todos: Array<TodosType>;
    onOpen: () => void
}

export const useSelectTodo = () => {
    const { defaultTodo } = useTodos();
    const [selectTodo, setSelectTodo] = useState<TodosType>(defaultTodo);

    const onSelectTodo = useCallback((props: Props) => {
        const { id, todos, onOpen } = props;
        const targetTodo = todos.find((todo) => todo.id === id)
        setSelectTodo(targetTodo!);
        onOpen();
    }, [])

    return { onSelectTodo, selectTodo }
}