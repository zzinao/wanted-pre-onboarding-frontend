export type Todo = {
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;

};

export interface GetTodos {
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
}