import styles from "./contact.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.heading}>Contact</h2>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          required
        />

        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          required
        />

        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          required
        />

        <button type="submit" className={styles.formButton}>
          Send
        </button>
      </form>
    </section>
  );
}
