import styles from "./word-to-guess.module.css";

interface Props {
  word: string[];
  alreadyCorrect: string[];
}

export function WordToGuess({ word, alreadyCorrect }: Props) {
  return (
    <div className={styles.word}>
      {word.map((w, idx) => {
        return <div key={idx}>{alreadyCorrect.includes(w) && w}</div>;
      })}
    </div>
  );
}
