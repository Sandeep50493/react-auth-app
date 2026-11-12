import React, { useState } from "react";

function PasswordField({
    label,
    name,
    value,
    onChange,
    error
}) {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="form-group">

            <label htmlFor={name}>
                {label}
            </label>

            <div className="password-wrapper">

                <input
                    id={name}
                    type={showPassword ? "text" : "password"}
                    name={name}
                    placeholder={`Enter ${label.toLowerCase()}`}
                    value={value}
                    onChange={onChange}
                />

                <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(prev => !prev)}
                >
                    {showPassword ? "Hide" : "Show"}
                </button>

            </div>

            {error && (
                <span className="error-message">
                    {error}
                </span>
            )}

        </div>
    );
}

export default PasswordField;