import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">首页</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="products">产品展示</Nav.Link>
                        <Nav.Link href="about">关于公司</Nav.Link>
                        <Nav.Link href="news">公司动态</Nav.Link>
                        <Nav.Link href="joinus">加入我们</Nav.Link>
                        <Nav.Link href="contact">联系我们</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
