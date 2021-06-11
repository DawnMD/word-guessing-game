const GuessRemaining = ({ guessesLeft }) => {
  return (
    <div className='text-lg font-medium p-2'>
      <span className='bg-red-800 rounded-full w-6 h-7 inline-block text-white text-center'>
        {guessesLeft}
      </span>{" "}
      Guess Remaining
    </div>
  );
};

export default GuessRemaining;
