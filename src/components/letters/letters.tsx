import styles from "./letters.module.css";

export function Letters() {
  return (
    <div className={styles.wrongLetters}>
      <p className={styles.uppercase}>Wrong</p>
      <span>a,g,o,p,t</span>
    </div>
  );
}
