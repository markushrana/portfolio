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
          <p>I&apos;m Markush Rana Magar, a IT student based in Okinawa,Japan.
I&apos;m 25 years old young boy, who is interested in playing and watching football.
I&apos;m currently studying web programming in GAIGO SCHOOL OF FOREIGN LANGUAGE.
I can communicate in four languages(Nepali,English,Japanese,Hindi).</p>
        </div>
      </section>

      <section className={styles.hobbySection}>
        <h3 className={styles.subHeading}>趣味</h3>
        <div className={styles.hobbyList}>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/hobby-1.jpg"
              alt="趣味1"
              width={150}
              height={150}
              className={styles.hobbyImage}
            />
            <p className={styles.hobbyText}>私はサッカーをするのが好きです。週に一度友達とプレーします。また、サッカーを観るのも大好きで、イギリスのチーム、リバプールFCを応援しています。</p>
          </article>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/travel.jpg"
              alt="趣味2"
              width={250}
              height={250}
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
