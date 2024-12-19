import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Account created successfully!");
            navigate("/login");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSignUp}
                className="bg-white p-8 rounded shadow-md w-96 space-y-4"
            >
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
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
                    Sign Up
                </button>
                <p className="text-center">
                    Already have an account?{" "}
                    <a
                        href="/login"
                        className="text-yellow-500 hover:underline"
                    >
                        Login
                    </a>
                </p>
            </form>
        </div>
    );
}
