// List 1 - app/page.tsx

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";




export default function HomePage() {
  return (
    <main className={styles.container}>
      {/* メインビジュアル */}
      <section className={styles.hero}>
        <Image
          src="/images/mainvisual2.jpg"
          alt="Main Visual"
          width={1200}
          height={600}
          className={styles.heroImage}
        />
        <h1 className={styles.title1}>Web Developer</h1>
        <h3 className={styles.title}> <b>MARKUSH RANA </b></h3>
        <h3 className={styles.title3}> <b>マルクスラナ </b></h3>
      </section>

      {/* 各セクションへのリンク */}
      <nav className={styles.navLinks}>
        <ul>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/skill">Skills</Link>
          </li>
          <li>
            <Link href="/strengths">Strengths</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
