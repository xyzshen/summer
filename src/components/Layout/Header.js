import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import logo from '../../assets/images/logo.png';
import styles from './Header.module.css';
const Header = () => {
    return (
        <header className={styles.siteHeader}>
            <Navbar logo={logo} />
        </header>
    );
};

export default Header;