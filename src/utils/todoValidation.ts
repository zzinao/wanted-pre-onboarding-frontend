type TodoValidationProps = {
    title?: string;
    content?: string;
};

export default function TodoValidation({
    title,
    content,
}: TodoValidationProps) {
    const errors: TodoValidationProps = {};
    const token = localStorage.getItem("token");

    if (!token) {
        errors.title = "로그인 후 이용해주세요";
        alert("로그인 후 이용해주세요!");
    }
    if (!title) {
        errors.title = "제목을 입력해주세요";
    }
    if (!content) {
        errors.content = "내용을 입력해주새요";
    }

    return errors;
}