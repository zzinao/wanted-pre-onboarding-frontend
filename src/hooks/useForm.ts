import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "../types/authType";

interface useFormProps {
    initialValues: any;
    onSubmit: any;
    validate: any;
}

export default function useForm({
    initialValues,
    onSubmit,
    validate,
}: useFormProps) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({ email: "", password: "", title: "", content: "" });
    const [submitted, setSubmitted] = useState<boolean>(false);
    const navigateTo = useNavigate();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setValues({ ...values, [id]: value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        setSubmitted(true);
        event.preventDefault();
        setErrors(validate(values));
    };

    useEffect(() => {
        if (submitted) {
            if (Object.keys(errors).length === 0) {
                onSubmit(values);
            }
            setSubmitted(false);
        }
    }, [errors]);

    return {
        values,
        errors,
        submitted,
        handleChange,
        handleSubmit,
    };
}