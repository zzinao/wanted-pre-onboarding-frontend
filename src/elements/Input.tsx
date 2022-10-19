import React from "react";
import styled from "styled-components";

export default function Input() {

    return (
        <>
            <InputFiled
            />
        </>
    );
}


const InputFiled = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  line-height: 25px;
  padding: 10px 10px;
  margin: 5px 0;
  &:focus {
    outline: none;
  }
`;