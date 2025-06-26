import styles from "./strengths.module.css";

export default function StrengthsSection() {
  return (
    <section id="strengths" className={styles.section}>
      <h2 className={styles.heading}>Strengths</h2>
      <p className={styles.text}>
        実務経験やプロジェクトが少ない場合でも、自分の強みを明確に伝えることは大切です。私が大切にしているスキルや姿勢をご紹介します。
      </p>

      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>👂 聞く力</h3>
        <p className={styles.strengthText}>
          相手の話にしっかりと耳を傾け、本音や課題を引き出すことが得意です。グループワークやチーム開発の中では「話しやすい」「意見をまとめてくれる」とよく言われます。
        </p>
      </section>

      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>🧠 論理的思考力</h3>
        <p className={styles.strengthText}>
          複雑な課題に対して筋道を立てて考えるのが得意です。普段からパズルや戦略ゲームが好きで、論理的に物事を整理して解決策を見つける習慣があります。コーディングでもバグの原因を丁寧に追うのが得意です。
        </p>
      </section>

      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>🔍 探究心</h3>
        <p className={styles.strengthText}>
          気になったことは納得するまで調べます。たとえば、ウェブのレイアウト技術を調べているうちに、ブラウザごとのレンダリングの違いまで深堀りしてしまったことがあります。学びを楽しむ姿勢が成長につながっています。
        </p>
      </section>

      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>🗣 言語とコミュニケーション</h3>
        <p className={styles.strengthText}>
          日本語・英語・ネパール語・ヒンディー語を使って、さまざまな背景を持つ人とのコミュニケーションが可能です。チーム開発や国際的な環境でもスムーズに意思疎通を図ることができます。
        </p>
      </section>
    </section>
  );
}
