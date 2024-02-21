import styles from "./letters.module.css"

export function Letters(){
    return (
        <div className={styles.wrongLettersContainer}>
            <div className={styles.wrongLetters}>
                <p>Wrong</p>
                <span>
                    a,g,o,p,t
                </span>
            </div>


            <div className={styles.word}>
                    <div>H</div>
                    <div>E</div>
                    <div>L</div>
                    <div>L</div>
                    <div>O</div>
            </div>
        </div>
    )
}