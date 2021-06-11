const GameResult = ({ status, guessesLeft, originalWord }) => {
  const text = status
    ? { descp: "Correct, Go Next", color: "text-green-600" }
    : guessesLeft === 0
    ? { descp: `The word is ${originalWord}`, color: "text-red-600" }
    : { descp: "Guess the Letters", color: "" };
  return (
    <div className={`text-lg font-medium p-2 m-1 text-center ${text.color}`}>
      {text.descp}
    </div>
  );
};
export default GameResult;
