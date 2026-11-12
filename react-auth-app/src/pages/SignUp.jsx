import React, { useState } from "react";

import { validateSignUp } from "../utils/validation";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";

function SignUp({ onLogin }) {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        setErrors(prev => ({
            ...prev,
            [name]: ""
        }));

        setMessage("");
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        const validationErrors = validateSignUp(formData);

        setErrors(validationErrors);
        setMessage("");

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        setLoading(true);

        try {

            await new Promise(resolve =>
                setTimeout(resolve, 1500)
            );

            setMessage("Registration successful!");

            console.log("Registration Data:", {
                name: formData.name,
                email: formData.email,
                mobile: formData.mobile
            });

            setFormData({
                name: "",
                email: "",
                mobile: "",
                password: "",
                confirmPassword: ""
            });

        } catch (error) {

            setMessage("Registration failed. Please try again.");

        } finally {

            setLoading(false);
        }
    };


    return (

        <div className="auth-container">

            <div className="auth-card">

                <h1>Create Account</h1>

                <p className="subtitle">
                    Register your new account
                </p>

                {message && (
                    <div className="success-message">
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} noValidate>

                    <InputField
                        label="Full Name"
                        name="name"
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                    />

                    <InputField
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                    />

                    <InputField
                        label="Mobile Number"
                        name="mobile"
                        type="tel"
                        placeholder="Enter mobile number"
                        value={formData.mobile}
                        onChange={handleChange}
                        error={errors.mobile}
                    />

                    <PasswordField
                        label="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        error={errors.password}
                    />

                    <PasswordField
                        label="Confirm Password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        error={errors.confirmPassword}
                    />

                    <button
                        type="submit"
                        className="auth-button"
                        disabled={loading}
                    >
                        {loading ? "Registering..." : "Sign Up"}
                    </button>

                </form>

                <p className="switch-page">

                    Already have an account?

                    <button
                        type="button"
                        onClick={onLogin}
                    >
                        Login
                    </button>

                </p>

            </div>

        </div>
    );
}

export default SignUp;