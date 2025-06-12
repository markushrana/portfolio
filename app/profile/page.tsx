import Image from "next/image";
import styles from "./page.module.css";

export default function ProfilePage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>Profile</h2>
      <section className={styles.profileSection}>
        <Image
          src="/images/profile.jpg"
          alt="My Profile"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <div className={styles.profileText}>
          <p><strong>名前：</strong>MARKUSH RANA MAGAR</p>
          <p><strong>年齢：</strong>26歳</p>
          <p>私はマルクス・ラナ・マガルです。現在、沖縄に在住している25歳のIT学生です。外国語外語学院でWebプログラミングを学んでいます。

技術やWeb開発に情熱を持っており、将来はこの分野で活躍できるように日々努力しています。

また、サッカーが大好きで、観戦するのもプレーするのも楽しんでいます。

私はネパール語・英語・日本語・ヒンディー語の4か国語を話すことができ、多くの人と円滑にコミュニケーションを取ることができます。

現在はポートフォリオの作成や、実践的なWeb開発の経験を積むことに取り組んでいます。常に学び続け、成長し、IT業界で貢献していくことを目指しています。</p>
        </div>
      </section>

      <section className={styles.hobbySection}>
        <h3 className={styles.subHeading}>趣味</h3>
        <div className={styles.hobbyList}>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/hobby2.jpg"
              alt="趣味1"
              width={400}
              height={300}
              className={styles.hobbyImage}
            />
            <p className={styles.hobbyText}>私はサッカーをするのが好きです。週に一度友達とプレーします。また、サッカーを観るのも大好きで、イギリスのチーム、リバプールFCを応援しています。</p>
          </article>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/travel.jpg"
              alt="趣味2"
              width={300}
              height={300}
              className={styles.hobbyImage}
            />
            <p className={styles.hobbyText}>私はまた、旅行していろいろな場所を探検するのが私の次の趣味です。私は時間をつくって、月に一度の短い旅行と年に二度の長い休暇に出かけます。</p>
          </article>
          {/* 必要に応じてカードを追加 */}
        </div>
      </section>
    </main>
  );
}
