import { Dialog } from '../dialog'
import { HangmanFigure } from '../hangman-figure'
import { Letters } from '../letters/letters'
import { Notification } from '../notification'
import { WordToGuess } from '../word-to-guess'
import styles from "./game-panel.module.css"


export function GamePanel(){
    return (
        <main className={styles.gameContainer}>
            <h1>Hangman</h1>
            <p>Find the hidden word - Enter letter</p>
            <section className={styles.hangmanSection}>
                <HangmanFigure/>
                <Letters/>
            </section>
            <WordToGuess/>
            {/* <Dialog/> */}
            {/* <Notification/> */}
        </main>
    )
}