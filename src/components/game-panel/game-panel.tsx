import { HangmanFigure } from '../hangman-figure'


export function GamePanel(){
    return (
        <>
            <h1>Hangman</h1>
            <p>Find the hidden word - Enter letter</p>
            <HangmanFigure/>

        </>
    )
}