import React from "react";
import '../css/LoginPage.css';
import { useState } from "react";
import LoginForm from "../components/LoginForm";
import HomePage from "./HomePage";

function LoginPage() {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123",
    }

    const [user, setUser] = useState({name: "", email: ""});

    const Login = details => {
        console.log(details);

        if (details.email === adminUser.email && details.password === adminUser.password)
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email
            });
        }

    return (
        <div className="App">
            {(user.email !== "") ? (
                <div className="Welcome">
                    <HomePage/>
                </div>
                    ) : (
                    <LoginForm login={Login}/>
                )};
        </div>
    );
};

export default LoginPage;

