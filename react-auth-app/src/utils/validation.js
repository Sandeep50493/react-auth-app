const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const mobileRegex = /^[6-9]\d{9}$/;

export const validateLogin = (formData) => {

    const errors = {};

    if (!formData.email.trim()) {
        errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
        errors.email = "Please enter a valid email";
    }

    if (!formData.password) {
        errors.password = "Password is required";
    } else if (formData.password.length < 8) {
        errors.password = "Password must contain at least 8 characters";
    }

    return errors;
};


export const validateSignUp = (formData) => {

    const errors = {};

    if (!formData.name.trim()) {
        errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
        errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
        errors.email = "Please enter a valid email";
    }

    if (!formData.mobile.trim()) {
        errors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(formData.mobile)) {
        errors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!formData.password) {
        errors.password = "Password is required";
    } else if (formData.password.length < 8) {
        errors.password = "Password must contain at least 8 characters";
    }

    if (!formData.confirmPassword) {
        errors.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
    }

    return errors;
};