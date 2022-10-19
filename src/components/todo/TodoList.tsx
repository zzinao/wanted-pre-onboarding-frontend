import React, { useState, useEffect } from "react";
import { GetTodos } from "../../types/todoType";
import SingleTodo from "./SingleTodo";

interface TodosProps {
    todos: Array<GetTodos>;
    setTodos: React.Dispatch<React.SetStateAction<Array<GetTodos>>>;
}

const TodoList = ({ todos, setTodos }: TodosProps) => {
    return (
        <>
            {todos?.map(todo => (
                <SingleTodo
                    todos={todos}
                    todo={todo}
                    setTodos={setTodos}
                    key={todo.id}
                />
            ))}
        </>
    );
};
export default TodoList;