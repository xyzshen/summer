import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from 'react-router-dom';

const navItems = [
    { path: "/", label: "首页" },
    { path: "/products", label: "产品展示" },
    { path: "/about", label: "关于公司" },
    { path: "/news", label: "公司动态" },
    { path: "/join", label: "加入我们" },
    { path: "/contact", label: "联系我们" }
];

const NavbarComponent = ({ logo }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="Summer-shop" style={{ width: '150px', height: 'auto' }} className="logo-image" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {navItems.map((item) => (
                            <Nav.Link
                                key={item.path}
                                as={NavLink}
                                to={item.path}
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                {item.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
