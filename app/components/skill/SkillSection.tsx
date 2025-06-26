import Image from "next/image";
import styles from "./skill.module.css";

export default function SkillSection() {
  return (
    <section id="skill" className={styles.section}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.skillCategory}>
          <h3 className={styles.subHeading}>Frontend</h3>
          <ul className={styles.skillsList}>
            <li>
              <Image
                src="/images/htmlcss.jpg"
                alt="HTML/CSS"
                className={styles.skillImage}
                width={80}
                height={80}
              />
              <div className={styles.skillName}>HTML / CSS</div>
            </li>
            <li>
              <Image
                src="/images/js.jpg"
                alt="JavaScript"
                className={styles.skillImage}
                width={80}
                height={80}
              />
              <div className={styles.skillName}>JavaScript (ES6+)</div>
            </li>
            <li>
              <Image
                src="/images/typescript.jpg"
                alt="TypeScript"
                className={styles.skillImage}
                width={80}
                height={80}
              />
              <div className={styles.skillName}>TypeScript</div>
            </li>
            <li>
              <Image
                src="/images/nextr.jpg"
                alt="React/Next.js"
                className={styles.skillImage}
                width={80}
                height={80}
              />
              <div className={styles.skillName}>React / Next.js</div>
            </li>
          </ul>
        </div>
        <div className={styles.skillCategory}>
          <h3 className={styles.subHeading}>Backend</h3>
          <ul className={styles.skillsList}>
            <li>
              <Image
                src="/images/node.jpg"
                alt="Node.js"
                className={styles.skillImage}
                width={80}
                height={80}
              />
              <div className={styles.skillName}>Node.js</div>
            </li>
            <li>
              <Image
                src="/images/java.jpg"
                alt="Express"
                className={styles.skillImage}
                width={80}
                height={80}
              />
              <div className={styles.skillName}>Express</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
