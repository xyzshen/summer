// src/App.js
import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";

const App = () => {
    return (
        <>
            <Header />
            <div className="container mt-5">
                <h1>Welcome to My Ecommerce Site</h1>
            </div>
            <Footer />
        </>
    );
};

export default App;
