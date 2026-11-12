import React, { useState } from "react";

import "./styles/Auth.css";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {

    const [currentPage, setCurrentPage] = useState("login");

    return (
        <div className="App">

            {currentPage === "login" ? (

                <Login
                    onSignUp={() => setCurrentPage("signup")}
                />

            ) : (

                <SignUp
                    onLogin={() => setCurrentPage("login")}
                />

            )}

        </div>
    );
}

export default App;