// src/layouts/MainLayout.js
import React from "react";

const MainLayout = ({ children }) => {
    return (
        <>
            <main className="container mt-5">{children}</main>
        </>
    );
};

export default MainLayout;
