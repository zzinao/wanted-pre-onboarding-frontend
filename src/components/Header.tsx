import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    const navigateTo = useNavigate();

    const token = localStorage.getItem("token");
    console.log(token)

    const handleLogIn = () => {
        navigateTo("/");
    };

    const handleLogOut = () => {
        localStorage.removeItem("token");
        navigateTo("/");
    };
    return (
        <>
            <Container>
                <h1>Todos</h1>
                {!token ?
                    <p onClick={handleLogIn}>login</p> :
                    <p onClick={handleLogOut}>logout</p>
                }

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