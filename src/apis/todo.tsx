import axios from "axios";
import { Todo, GetTodos } from "../types/todoType";

const BASE_URL = "https://pre-onboarding-selection-task.shop";

export const getTodos = () => {
    const token = localStorage.getItem("token")
        ? `Bearer ${localStorage.getItem("token")}`
        : undefined;
    const headers = token
        ? { headers: { Authorization: token, "Content-Type": "application/json" } }
        : undefined;
    return axios.get(`${BASE_URL}/todos`, headers);
};

export const createTodo = async (todo: string) => {
    const token = localStorage.getItem("token")
        ? `Bearer ${localStorage.getItem("token")}`
        : undefined;
    const headers = token
        ? { headers: { Authorization: token, "Content-Type": "application/json" } }
        : undefined;
    return await axios
        .post(`${BASE_URL}/todos`, { todo }, headers)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};

export const updateTodo = async (todo: string, isCompleted: boolean, id: number) => {
    const token = localStorage.getItem("token")
        ? `Bearer ${localStorage.getItem("token")}`
        : undefined;
    const headers = token
        ? { headers: { Authorization: token, "Content-Type": "application/json" } }
        : undefined;
    return await axios
        .put(`${BASE_URL}/todos/${id}`, { todo, isCompleted }, headers)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};

export const deleteTodo = async (id: number) => {
    const token = localStorage.getItem("token")
        ? `Bearer ${localStorage.getItem("token")}`
        : undefined;
    const headers = token
        ? { headers: { Authorization: token, "Content-Type": "application/json" } }
        : undefined;
    return await axios
        .delete(`${BASE_URL}/todos/${id}`, headers)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};