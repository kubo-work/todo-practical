import { ChangeEvent, useCallback, useState } from "react"
import { TodosType } from "../types/TodosType"
import { useTodos } from "./useTodos";

export const useInsertTodos = () => {
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
    return { onClickAdd, onChangeInputText, inputText }
}
