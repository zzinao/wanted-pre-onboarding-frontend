import React from "react";
import styled from "styled-components";

type Props = {
    children: string;
    _onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = (props: Props) => {
    const { children, _onClick } = props;
    return (
        <>
            <ElButton type="submit" onClick={_onClick}>
                {children}
            </ElButton>
        </>
    );
};

Button.defaultProps = {
    children: null,
    _onClick: () => { },
};

const ElButton = styled.button`
  margin: 5px;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #11c2a1;
  color: #fff;
  &:hover {
    background-color: #e6e33e;
  }
`;

export default Button;