type AuthValidationProps = {
    email?: string;
    password?: string;
};

export default function AuthValidation({
    email,
    password,
}: AuthValidationProps) {
    const errors: AuthValidationProps = {};

    if (!email) {
        errors.email = " 이메일이 입력되지 않았습니다.";
    } else if (
        !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
            email
        )
    ) {
        errors.email = "@ , . 을 포함해 주세요";
    }

    if (!password) {
        errors.password = "비밀번호가 입력되지 않았습니다";
    } else if (password.length < 8) {
        errors.password = "8자 이상의 패스워드를 지정해주새요";
    }
    return errors;
}