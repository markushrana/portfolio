import styles from "./page.module.css";
import Image from "next/image";

export default function SkillPage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>Skills</h2>
      <p className={styles.text}>
      私はHTMLとCSSを使って、きれいでレスポンシブなウェブページを作ることができます。
今、JavaScript（ES6以上）とTypeScriptを勉強しながら、プロジェクトに使っています。
ReactとNext.jsを使って、ユーザーインターフェースを作っています。
また、Node.jsとExpressを使って、簡単なバックエンド開発も行っています。
      </p>
      <Image
          src="/images/htmlcss.jpg"
          alt="HTMLCSS"
          width={100}
          height={100}
          className={styles.skillimage}
        />
        <Image
          src="/images/js.jpg"
          alt="JAVASCRIPT"
          width={100}
          height={100}
          className={styles.skillimage}
        />
        <Image
          src="/images/nextr.jpg"
          alt="REACT"
          width={100}
          height={100}
          className={styles.skillimage}
        />
        <Image
          src="/images/node.jpg"
          alt="NODE"
          width={100}
          height={100}
          className={styles.skillimage}
        />
    </main>
  );
}
