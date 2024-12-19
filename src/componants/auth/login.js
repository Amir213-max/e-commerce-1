
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Logged in successfully!");
            navigate("/");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded shadow-md w-96 space-y-4"
            >
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
                >
                    Login
                </button>
                <p className="text-center">
                    Don't have an account?{" "}
                    <a
                        href="/signup"
                        className="text-yellow-500 hover:underline"
                    >
                        Sign Up
                    </a>
                </p>
            </form>
        </div>
    );
}
