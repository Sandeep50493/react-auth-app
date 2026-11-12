import React from "react";

function InputField({
    label,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    error
}) {

    return (
        <div className="form-group">

            <label htmlFor={name}>
                {label}
            </label>

            <input
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />

            {error && (
                <span className="error-message">
                    {error}
                </span>
            )}

        </div>
    );
}

export default InputField;