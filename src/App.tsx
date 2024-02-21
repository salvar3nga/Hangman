import './App.css'
import { HangmanFigure } from './components/hangman-figure'

function App() {

  return (
    <>
          <h1>Hangman</h1>
          <p>Find the hidden word - Enter letter</p>
          <HangmanFigure></HangmanFigure>
    </>
  )
}

export default App
