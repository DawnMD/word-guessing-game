const GameResult = ({ status, guessesLeft }) => {
  const text = status
    ? { descp: "Press Next", color: "text-green-600" }
    : guessesLeft === 0
    ? { descp: "Restart", color: "text-red-600" }
    : { descp: "Guess the Letters", color: "" };
  return (
    <div
      className={`text-lg font-medium py-2 px-3 text-center my-auto ${text.color}`}
    >
      {text.descp}
    </div>
  );
};
export default GameResult;
