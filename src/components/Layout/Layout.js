import React from "react";
import "./Layout.css";
import Navbar from "./Navbar";
import { Container, Row, Col } from "react-bootstrap";
const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <main className="main-content">
                <Container fluid>
                    <Row>
                        <Col>{children}</Col>
                    </Row>
                </Container>
            </main>
            <footer className="footer">
                <p>版权所有 © 2023 Summer</p>
            </footer>
        </div>
    );
};

export default Layout;
