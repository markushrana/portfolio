"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  }

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerContainer}>
        <div className={styles.copyRight}>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>

        <ul className={styles.footerNav} aria-label="Footer navigation">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#skill">Skill</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#strengths">Strengths</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className={styles.socialIcons} aria-label="Social media links">
          <a
            href="https://github.com/markushrana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.72-4.04-1.61-4.04-1.61a3.18 3.18 0 00-1.33-1.75c-1.1-.76.08-.75.08-.75a2.52 2.52 0 011.84 1.24 2.56 2.56 0 003.5 1 2.56 2.56 0 01.76-1.6c-2.67-.3-5.47-1.35-5.47-6a4.66 4.66 0 011.24-3.24 4.34 4.34 0 01.12-3.19s1-.32 3.3 1.23a11.47 11.47 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23a4.34 4.34 0 01.12 3.19 4.65 4.65 0 011.24 3.24c0 4.66-2.8 5.7-5.48 6a2.87 2.87 0 01.82 2.22v3.3c0 .32.22.7.82.58A12 12 0 0012 .297" />
            </svg>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7 0h3.6v1.71h.05a3.95 3.95 0 013.55-1.95c3.8 0 4.5 2.5 4.5 5.75V21H17v-5.5c0-1.3 0-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H10V9z" />
            </svg>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.914 9.914 0 01-3.127 1.196 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.15a4.902 4.902 0 001.523 6.573 4.9 4.9 0 01-2.229-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.604 3.417A9.867 9.867 0 010 19.54a13.905 13.905 0 007.548 2.212c9.057 0 14.01-7.514 14.01-14.01 0-.213-.004-.425-.015-.636a9.936 9.936 0 002.412-2.548l-.002-.002z" />
            </svg>
          </a>

          <a
            href="https://instagram.com/markushrana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.75-.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
            </svg>
          </a>

          <a href="ranamarkush@gmail.com" aria-label="Email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
