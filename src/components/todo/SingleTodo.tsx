import React, { useState } from "react";
import styled from "styled-components";
import { GetTodos } from "../../types/todoType";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { deleteTodo, updateTodo } from "../../apis/todo";
import { Input, Button } from "../../elements";

interface Props {
    todos: Array<GetTodos>;
    todo: GetTodos;
    setTodos: React.Dispatch<React.SetStateAction<Array<GetTodos>>>;
}

const SingleTodo = ({ todos, todo, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<GetTodos>(todo);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setEditTodo({ ...editTodo, [id]: value });
    };

    const handleUpdate = (editTodo: GetTodos) => {
        console.log(editTodo);
        setTodos(
            todos.map((todo) =>
                todo.id === editTodo.id
                    ? { ...todo, todo: editTodo.todo }
                    : todo
            )
        );
        updateTodo(editTodo.todo, editTodo.isCompleted, editTodo.id);
        setEdit(false);
    };

    const handleDelete = (title: string, id: number) => {
        setTodos(todos.filter((todo) => todo.todo !== title));
        deleteTodo(id);
    };
    return (
        <Container>
            {edit ? (
                <EditForm>
                    <Input id="todo" value={editTodo.todo} _onChange={handleChange} />
                    <div>
                        <Button _onClick={() => setEdit(false)}>취소</Button>
                        <Button
                            _onClick={() => {
                                handleUpdate(editTodo);
                            }}
                        >
                            수정
                        </Button>
                    </div>
                </EditForm>
            ) : (
                <>
                    <p>{todo.todo}</p>
                    <div>
                        <span
                            className="icon"
                            onClick={() => {
                                if (!edit) {
                                    setEdit(!edit);
                                }
                            }}
                        >
                            <AiFillEdit />
                        </span>
                        <span
                            className="icon"
                            onClick={() => handleDelete(todo.todo, todo.id)}
                        >
                            <AiFillDelete />
                        </span>
                    </div>
                </>
            )}
        </Container>
    );
};

const Container = styled.div`
  width: 400px;
  margin: 10px auto;
  justify-contents: center;
  align-items: center;
  display: flex;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  & p {
    flex: 1;
    text-align: start;
  }
  & .icon {
    margin-left: 10px;
    font-size: 20px;
    cursor: pointer;
  }
`;

const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  & input {
    border: 1px solid #ddd;
    line-height: 25px;
    margin: 5px;
  }
  & div {
    display: flex;
    justify-content: end;
  }
`;

export default SingleTodo;