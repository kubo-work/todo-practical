import { TodosStatusType } from "./TodosStatusType";

export type TodosType = {
    id: number;
    title: string;
    createDate: string;
    updateDate: string;
    status: keyof TodosStatusType;
}

