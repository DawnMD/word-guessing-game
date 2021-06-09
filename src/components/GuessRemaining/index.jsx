const GuessRemaining = ({ guessesLeft }) => {
  return (
    <div className='text-lg font-medium py-2 px-3 text-center my-auto'>
      <span className='bg-red-800 rounded-full w-6 h-7 inline-block text-white text-center'>
        {guessesLeft}
      </span>{" "}
      Guess Remaining
    </div>
  );
};

export default GuessRemaining;
