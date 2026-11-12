import React, { useState } from "react";

import { validateLogin } from "../utils/validation";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";

function Login({ onSignUp }) {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

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

        setMessage("");

        const validationErrors = validateLogin(formData);

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        setLoading(true);

        try {

            await new Promise(resolve =>
                setTimeout(resolve, 1500)
            );

            setMessage("Login successful!");

            console.log("Login Data:", {
                email: formData.email,
                rememberMe
            });

            setFormData({
                email: "",
                password: ""
            });

        } catch (error) {

            setMessage("Login failed. Please try again.");

        } finally {

            setLoading(false);
        }
    };


    return (

        <div className="auth-container">

            <div className="auth-card">

                <h1>Welcome Back</h1>

                <p className="subtitle">
                    Login to your account
                </p>

                {message && (
                    <div className="success-message">
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} noValidate>

                    <InputField
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                    />

                    <PasswordField
                        label="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        error={errors.password}
                    />

                    <div className="form-options">

                        <label className="remember-label">

                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) =>
                                    setRememberMe(e.target.checked)
                                }
                            />

                            Remember Me

                        </label>

                        <button
                            type="button"
                            className="text-button"
                            onClick={() =>
                                alert("Forgot password feature coming soon")
                            }
                        >
                            Forgot Password?
                        </button>

                    </div>

                    <button
                        type="submit"
                        className="auth-button"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>

                </form>

                <p className="switch-page">

                    Don't have an account?

                    <button
                        type="button"
                        onClick={onSignUp}
                    >
                        Sign Up
                    </button>

                </p>

            </div>

        </div>
    );
}

export default Login;