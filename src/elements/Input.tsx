import React from "react";
import styled from "styled-components";

interface Props {
    placeholder: string;
    autoComplete: string;
    disabled: boolean;
    id: string;
    value: string;
    type: string;
    _onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: Props) {
    const { type, placeholder, value, id, autoComplete, disabled, _onChange } =
        props;
    return (
        <>
            <InputFiled
                type={type}
                value={value}
                disabled={disabled}
                autoComplete={autoComplete}
                id={id}
                placeholder={placeholder}
                onChange={_onChange}
            />
        </>
    );
}

Input.defaultProps = {
    type: "text",
    disabled: false,
    value: "",
    autoComplete: "on",
    id: "",
    placeholder: "텍스트를 입력하세요",
    _onChange: () => { },
};

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