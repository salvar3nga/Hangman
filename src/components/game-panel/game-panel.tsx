import React from "react";
import { Dialog } from "../dialog";
import { HangmanFigure } from "../hangman-figure";
import { Letters } from "../letters/letters";
import { Notification } from "../notification";
import { WordToGuess } from "../word-to-guess";
import styles from "./game-panel.module.css";

import { WORDS_DB } from "../db";

const word = WORDS_DB[Math.floor(Math.random() * WORDS_DB.length)];
// const word = WORDS_DB[0].toLowerCase();

const correctLetters = word.split("");

const wrongLetters: string[] = [];
const guessedCorrectly: Set<string> = new Set([]);

enum GameDecision {
  WON,
  LOST,
}

const winMessage = "You have Won, congratulations!";

export function GamePanel() {
  const [chosenLetter, setChosenLetter] = React.useState<string>("");
  const [correctGuess, setCorrectGuess] = React.useState<string[]>([]);
  const [gameMessage, setGameMessage] = React.useState<string | undefined>(undefined);
  const [displayPopup, setDisplayPopup] = React.useState(false);

  window.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      setChosenLetter(e.key);
    }
  });

  React.useEffect(() => {
    onWordMatch(chosenLetter);
  }, [chosenLetter]);

  function onWordMatch(w: string): void {
    if (correctLetters.includes(w)) {
      guessedCorrectly.add(w);

      setCorrectGuess(Array.from(guessedCorrectly));
    }

    if (guessedCorrectly.size === correctLetters.length) {
      displayMessage(GameDecision.WON);
      displayPopup;
    }
  }

  function displayMessage(decision: GameDecision) {
    if (decision === GameDecision.WON) {
      setGameMessage(winMessage);
    }
  }

  function onContinue() {
    setGameMessage(undefined);
    setDisplayPopup(false);
  }

  return (
    <main className={styles.gameContainer}>
      <h1>Hangman</h1>
      <p>Find the hidden word - Enter letter</p>
      <section className={styles.hangmanSection}>
        <HangmanFigure />
        <Letters />
      </section>
      <WordToGuess word={correctLetters} alreadyCorrect={correctGuess} />
      {displayPopup && <Dialog message={gameMessage} onContinue={onContinue} />}
      {/* <Notification/> */}
    </main>
  );
}
