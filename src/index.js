// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import ProductDetails from "@pages/ProductDetails";
import AboutUs from "@pages/AboutUs";
import News from "@pages/News";
import Qualifications from "@pages/Qualifications";
import JoinUs from "@pages/JoinUs";
import ContactUs from "@pages/ContactUs";
import Header from "@components/Header";
import Footer from "@components/Footer";
import MainLayout from "@layouts/MainLayout";
import "./styles/global.css";
import "./styles/variables.css";
import "./styles/theme.css";
import i18n from "@utils/i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <i18n.Provider value={i18n}>
            <Router>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MainLayout>
                                <Home />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/product/:id"
                        element={
                            <MainLayout>
                                <ProductDetails />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <MainLayout>
                                <AboutUs />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/news"
                        element={
                            <MainLayout>
                                <News />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/qualifications"
                        element={
                            <MainLayout>
                                <Qualifications />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/joinus"
                        element={
                            <MainLayout>
                                <JoinUs />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <MainLayout>
                                <ContactUs />
                            </MainLayout>
                        }
                    />
                </Routes>
                <Footer />
            </Router>
        </i18n.Provider>
    </React.StrictMode>
);

document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            if (body.getAttribute("data-theme") === "dark") {
                body.setAttribute("data-theme", "light");
            } else {
                body.setAttribute("data-theme", "dark");
            }
        });
    }
});
