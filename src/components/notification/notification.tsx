import styles from "./notification.module.css"

export function Notification(){
    return (
        <div className={styles.notificationContainer}>
            <p>You have already entered this letter</p>
        </div>
    )
}