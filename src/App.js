import { Component } from "react";
import words from "./assets/words";
import Alphabets from "./components/Alphabets";
import Category from "./components/Category";
import Word from "./components/Word";
import GameResult from "./components/GameResult";
import GuessRemaining from "./components/GuessRemaining";
import ActionButton from "./components/ActionButton";
import WordImage from "./components/WordImage";
class App extends Component {
  state = this.initialState();
  initialState() {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letters = Array.from(alphabets).map((letter) => ({
      letter,
      disabled: false,
    }));
    const category = this.randomCategory(words);
    const guessedLetters = new Set();
    const guessedTheWord = false;
    const guessesLeft = 5;
    const initialWord = this.randomWord(category);
    const word = Array.from(initialWord).map((letter) => ({
      letter,
      disabled: false,
    }));
    return {
      alphabets,
      letters,
      category,
      guessedLetters,
      guessedTheWord,
      guessesLeft,
      word,
      initialWord,
    };
  }
  randomCategory(data) {
    const categories = [];

    for (const entry of data.entries()) {
      // eslint-disable-next-line
      let [index, object] = entry;
      categories.push(object);
    }

    return categories[Math.floor(Math.random() * categories.length)];
  }
  randomWord(category) {
    return category.words[
      Math.floor(Math.random() * category.words.length)
    ].toUpperCase();
  }
  addKeyPressListener() {
    document.addEventListener("keydown", (event) => {
      const letter = event.key.toUpperCase();
      if (this.state.letters.includes(letter)) {
        this.selectLetter(letter);
      }
    });
  }
  selectLetter = (selectedLetter) => {
    this.updateGame(this.state, selectedLetter);
  };
  updateGame = (state, selectedLetter) => {
    if (state.guessesLeft === 1) {
      const nextState = { ...state };
      nextState.letters.map((letter) => (letter.disabled = true));
      this.setState(nextState);
    }
    if (state.guessesLeft > 0 && !state.guessedTheWord) {
      const nextState = { ...state };
      const alreadyGuessedLetter = state.guessedLetters.has(selectedLetter);
      if (!alreadyGuessedLetter) {
        nextState.guessedLetters.add(selectedLetter.letter);
        const letter = nextState.letters.find(
          (letter) => letter === selectedLetter
        );
        if (letter) {
          letter.disabled = true;
        }
      }
      const guessedTheWord = nextState.word
        .filter((letter) => !["-", " "].includes(letter.letter))
        .every((letter) => nextState.guessedLetters.has(letter.letter));
      const lettersFoundInWord =
        nextState.word.filter(
          (letter) => letter.letter === selectedLetter.letter
        ).length > 0;
      if (guessedTheWord) {
        nextState.guessedTheWord = true;
        nextState.letters.map((letter) => (letter.disabled = true));
      } else if (!alreadyGuessedLetter && !lettersFoundInWord) {
        nextState.guessesLeft--;
      }

      nextState.word.forEach((letter) =>
        letter.letter === selectedLetter.letter ? (letter.disabled = true) : ""
      );
      this.setState(nextState);
    }
  };
  newGame = () => {
    this.setState(this.initialState());
  };
  render() {
    // console.log(this.state);
    return (
      <div className='flex flex-col justify-items-center items-center content-between'>
        <h1 className='text-center text-4xl font-bold p-2 my-2'>
          Word Guess Game
        </h1>
        <Category category={this.state.category} />
        <WordImage word={this.state.initialWord} />
        <Word word={this.state.word} />
        <Alphabets letters={this.state.letters} onClick={this.selectLetter} />
        <div className='flex justify-between p-2 m-2 max-w-lg md:w-8/12'>
          <GuessRemaining guessesLeft={this.state.guessesLeft} />
          <GameResult
            status={this.state.guessedTheWord}
            guessesLeft={this.state.guessesLeft}
            originalWord={this.state.initialWord}
          />
          <ActionButton
            clickHandle={this.newGame}
            guessesLeft={this.state.guessesLeft}
          />
        </div>
      </div>
    );
  }
}

export default App;
