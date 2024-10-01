import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const navItems = [
    { path: "/", label: "nav.home" },
    { path: "/products", label: "nav.products" },
    { path: "/about", label: "nav.about" },
    { path: "/news", label: "nav.news" },
    { path: "/join", label: "nav.join" },
    { path: "/contact", label: "nav.contact" }
];

const NavbarComponent = ({ logo }) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

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
                                {t(item.label)}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <NavDropdown title={t('language')} id="language-dropdown">
                        <NavDropdown.Item onClick={() => changeLanguage('en')}>English</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => changeLanguage('es')}>Español</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => changeLanguage('pt')}>Português</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => changeLanguage('zh')}>中文</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
