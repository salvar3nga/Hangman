import styles from "./dialog.module.css"

export function Dialog(){
    return (
        <div className={styles.popupContainer}>
            <div className={styles.popup}>
                <h2>You have Won</h2>
                <button> Play again</button>
            </div>
        </div>
    )
}