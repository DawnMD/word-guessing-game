import React from "react";

const Letter = ({ disabled, letter, onClick, role }) => {
  return (
    <div
      className='p-1'
      role={role}
      onClick={() => onClick(letter)}
      aria-disabled={disabled ? "true" : false}
    >
      {renderLetterElement(letter, disabled, role)}
    </div>
  );
};

const renderLetterElement = (letter, disabled, role) => {
  if (role === "button") {
    const ariaLabel = disabled ? letter : "blank";

    return (
      <button
        aria-label={ariaLabel}
        disabled={disabled}
        className='bg-indigo-200 p-2 w-10 text-center rounded shadow-md text-lg active:bg-indigo-600 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:shadow-inner hover:bg-indigo-400 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring'
      >
        {letter.letter}
      </button>
    );
  } else if (letter === "-") {
    return <div className='text-5xl w-10 text-center font-light'>{letter}</div>;
  } else if (!disabled) {
    return (
      <div className='border-b-2 border-gray-800 w-10 h-5 inline-block'></div>
    );
  }

  return <div className='text-2xl'>{letter}</div>;
};

export default Letter;
