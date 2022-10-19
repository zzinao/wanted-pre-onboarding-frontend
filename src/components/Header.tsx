import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    const navigateTo = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("token");
        navigateTo("/");
    };
    return (
        <>
            <Container>
                <h1>Todos</h1>
                <p onClick={handleLogOut}>logout</p>
            </Container>
        </>
    );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export default Header;