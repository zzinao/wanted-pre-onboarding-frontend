import React from 'react'
import { Button, Input } from '../../elements';
import styled from 'styled-components'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: any;
}

const AddTodo = ({ todo, setTodo, handleAdd }: Props) => {
    return (
        <Container>
            <Input
                id="todo"
                value={todo}
                _onChange={(e) => setTodo(e.target.value)}
                placeholder="할 일을 적어주세요"
            />
            <Button _onClick={() => handleAdd(todo)}>할일 추가</Button>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
margin: 0 auto;
`

export default AddTodo;