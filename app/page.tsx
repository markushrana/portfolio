"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import ProfileSection from "./components/profile/ProfileSection";
import SkillSection from "./components/skill/SkillSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import StrengthsSection from "./components/strengths/StrengthsSection";
import ContactSection from "./components/contact/ContactSection";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#profile", label: "Profile" },
  { href: "#skill", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#strengths", label: "Strengths" },
  { href: "#contact", label: "Contact" },
];

export default function HomePage() {
  return (
    <main className={styles.container}>
      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/images/mainvisual2.jpg"
            alt="Main Visual"
            width={1200}
            height={600}
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay}>
            <h1 className={styles.heroTitle}>Web Developer</h1>
            <h2 className={styles.heroSubtitle}>MARKUSH RANA</h2>
            <h3 className={styles.heroSubtitleJP}>マルクスラナ</h3>
          </div>
        </div>
      </section>

      {/* Profile Section - detailed */}
      <ProfileSection />

      {/* Skills Section - detailed */}
      <SkillSection />

      {/* Projects Section - detailed */}
      <ProjectsSection />

      {/* Strengths Section */}
      <StrengthsSection />

      {/* Contact Section - detailed */}
      <ContactSection />

      <Footer />
    </main>
  );
}
