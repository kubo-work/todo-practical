import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useTodos } from "./useTodos";
import { TodosType } from "../types/TodosType";
import { SortIdStatus } from "../types/SordIdStatus";

export const useFilterTodos = () => {
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

    return { onChangeSelect, filterStatus, onChangeFilterStatus, statusLabels, sortIdStatus }
}
