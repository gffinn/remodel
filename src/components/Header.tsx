// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css'; // Correct relative path

const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>Renovation</div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/about" className={styles.navLink}>About</Link>
        <Link to="/projects" className={styles.navLink}>Projects</Link>
        <Link to="/contact" className={styles.navLink}>Contact</Link>
      </nav>
      <button className={styles.button}>Get in Touch</button>
    </header>
  );
};

export default Header;
