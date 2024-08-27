import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import logo from '../images/logo.jpg';

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className={styles.logoDiv}>
                <img src={logo} alt="Logo" />
            </div>
        </>
    );
};

export default Header;
