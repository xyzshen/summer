import React from "react";
import "./Layout.css";
import Header from "./Header";
import { Container, Row, Col } from "react-bootstrap";
const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <footer className="footer">
                <p>版权所有 © 2023 Summer</p>
            </footer>
        </div>
    );
};

export default Layout;
