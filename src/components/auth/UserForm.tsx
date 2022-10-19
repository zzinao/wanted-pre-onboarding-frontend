import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { loginDB, signupDB } from "../../apis/auth";
import useForm from "../../hooks/useForm";
import { AuthForm } from "../../types/authType";
import AuthValidation from "../../utils/authValidation";
import { Input, Button } from "../../elements";

const UserForm = () => {
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const navigate = useNavigate();
  const { values, errors, submitted, handleChange, handleSubmit } = useForm({
    initialValues: { email: "", password: "" },
    onSubmit: (values: AuthForm) => {
      !isSignup ? loginDB(values, navigate) : signupDB(values);
      setIsSignup(false);
    },
    validate: AuthValidation,
  });

  return (
    <Container>
      {isSignup ? <h2>Sign up</h2> : <h2>Login</h2>}
      <Form onSubmit={handleSubmit}>
        <Input
          id="email"
          type="text"
          value={values.email}
          _onChange={handleChange}
          placeholder="아이디를 입력해주세요"
        />
        {errors.email && <span>{errors.email}</span>}
        <Input
          id="password"
          type="password"
          value={values.password}
          _onChange={handleChange}
          placeholder="비밀번호를 입력해주세요"
        />
        {errors.password && <span>{errors.password}</span>}
        <Button>{isSignup ? "회원가입" : "로그인"}</Button>
      </Form>
      {!isSignup ? (
        <Text onClick={() => setIsSignup(true)}>회원이 아니신가요?</Text>
      ) : (
        <Text onClick={() => setIsSignup(false)}>로그인으로 돌아가기</Text>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 400px;
  margin: 10% auto 0;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  & span {
    color: #f57280;
    font-size: 12px;
    text-align: start;
  }
`;

const Text = styled.p`
  text-align: center;
  cursor: pointer;
  font-weight: 500;
  color: #aaa;
`;
export default UserForm;