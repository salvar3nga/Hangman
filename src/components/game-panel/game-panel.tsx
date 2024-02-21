import { HangmanFigure } from '../hangman-figure'
import { Letters } from '../letters/letters'


export function GamePanel(){
    return (
        <main>
            <h1>Hangman</h1>
            <p>Find the hidden word - Enter letter</p>
            <HangmanFigure/>
            <Letters/>
        </main>
    )
}