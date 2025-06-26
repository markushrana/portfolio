import styles from "./projects.module.css";

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.heading}>Work</h2>
      <p className={styles.text}>
        ここでは自分がこれまで制作してきたアプリやサイトを紹介します。各作品のサムネイルや簡単な説明文、GitHub
        リンクを載せましょう。
      </p>
      <ul className={styles.workList}>
        <li className={styles.workItem}>
          <h3>作品名 1</h3>
          <p>Next.js を使ったポートフォリオサイト</p>
          <a
            href="https://github.com/username/project1"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub リポジトリはこちら
          </a>
        </li>
        <li className={styles.workItem}>
          <h3>作品名 2</h3>
          <p>React + Firebase で作った TODO アプリ</p>
          <a
            href="https://github.com/username/project2"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub リポジトリはこちら
          </a>
        </li>
      </ul>
    </section>
  );
}
