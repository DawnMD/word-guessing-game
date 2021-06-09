const ActionButton = ({ clickHandle, guessesLeft }) => {
  let buttonText = "Next";
  if (guessesLeft === 0) {
    buttonText = "New Game";
  }
  return (
    <button
      className='text-base font-semibold px-3 py-3 text-gray-50 rounded-lg tracking-wider shadow-lg lg:text-base bg-indigo-500 hover:bg-indigo-400 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600'
      onClick={clickHandle}
    >
      {buttonText}
    </button>
  );
};
export default ActionButton;
