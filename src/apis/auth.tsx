import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { AuthForm } from "../types/authType";
const BASE_URL = "https://pre-onboarding-selection-task.shop";


export const loginDB = async (data: AuthForm, navigate: NavigateFunction) => {

    const { email, password } = data;
    return await axios
        .post(`${BASE_URL}/auth/signin`, {
            email,
            password,
        })
        .then((res) => {
            localStorage.setItem("token", res.data.access_token);
            navigate("/todo")
        })
        .catch((err) => {
            console.log(err);
            alert("아이디 혹은 비밀번호가 틀립니다")
        });
};

export const signupDB = async (data: AuthForm) => {
    const { email, password } = data;
    return await axios
        .post(`${BASE_URL}/auth/signup`, {
            email,
            password,
        })
        .then((res) => {
            alert("가입이 완료되었습니다!");
        })
        .catch((err) => {
            alert("다시 시도해주세요")
            console.log(err);
        });
};