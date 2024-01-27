import React, { useState, useEffect, createContext } from "react";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoverdUser = localStorage.getItem("user");

        if(recoverdUser) {
            setUser(JSON.parse(recoverdUser));
        }

        setLoading(false);
    }, []);

    const login = (email, password) => {
        console.log('login auth', {email, password});

        const loggerUser = {
            id: "123",
            email,
        };

        localStorage.setItem("user", JSON.stringify(loggerUser));

        if (email==="informaProcuradoria@gmail.com" && password === "secret") {
            setUser (loggerUser)
            navigate("/home");
        }
    };

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};