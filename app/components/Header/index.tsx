'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Anchor links for single page navigation
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#profile', label: 'Profile' },
    { href: '#skill', label: 'Skill' },
    { href: '#projects', label: 'Projects' },
    { href: '#strengths', label: 'Strengths' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={styles.header}>
      {/* Backdrop for mobile menu */}
      {isOpen && <div className={styles.backdrop} onClick={() => setIsOpen(false)} />}
      <nav className={styles.navbar} aria-label="Main Navigation">
        <div className={styles.topRow}>
          <a href="#home" className={styles.siteTitle}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className={styles.logo}>Portfolio</span>
            </div>
          </a>

          <button
            className={styles.menuToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            ☰
          </button>
        </div>

        <ul
          ref={menuRef}
          className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}
          style={{ transition: 'transform 0.3s cubic-bezier(.4,0,.2,1)' }}
        >
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={styles.navLink}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}