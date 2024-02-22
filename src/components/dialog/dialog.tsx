import styles from "./dialog.module.css";
interface Props {
  message: string | undefined;
  onContinue: () => void;
}

export function Dialog({ message, onContinue }: Props) {
  return (
    <div className={styles.popupContainer}>
      <div className={styles.popup}>
        <h2>{message}</h2>
        <button className={styles.popupBtn} onClick={onContinue}>
          Play again
        </button>
      </div>
    </div>
  );
}
