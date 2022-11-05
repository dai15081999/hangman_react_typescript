import React from 'react'

type HangmanWordProps = {
  guessedLetters: string[],
  wordToGuess: string,
  reveal?: boolean
}

const HangmanWord = ({guessedLetters, wordToGuess, reveal}: HangmanWordProps) => {
  return (
    <div style={{
      display:"flex",
      gap: ".25em",
      fontSize:"6rem",
      fontWeight:"bold",
      textTransform:"uppercase",
      fontFamily:"monospace"
    }}>
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} style={{borderBottom:".1em solid black"}}>
          <span style={{visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden"}}>{letter}</span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord