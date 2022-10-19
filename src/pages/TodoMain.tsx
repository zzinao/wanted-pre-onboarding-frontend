import React, { useState, useEffect } from "react";
import TodoList from "../components/todo/TodoList";
import Header from "../components/Header";
import { createTodo, getTodos } from "../apis/todo";
import { Todo } from "../types/todoType";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AddTodo from "../components/todo/AddTodo";

function TodoMain() {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleAdd = (todo: string) => {
        if (todo) {
            createTodo(todo);
            setTodos([...todos, { id: Date.now(), todo, isCompleted: false, userId: 1, }]);
            setTodo("");
        }
    }
    useEffect(() => {
        if (!token) {
            navigate("/")
        }
        getTodos()
            .then((res) => {
                setTodos(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <Container>
            <Header />
            <AddTodo todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList todos={todos} setTodos={setTodos} />
        </Container>
    );
}

const Container = styled.div`
  width: 500px;
  margin: 10% auto;
  padding: 30px;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export default TodoMain;