import React from "react";
import Letter from "../Letter";
const Word = ({ word }) => {
  return (
    <div className='text-center mx-auto my-3'>
      {[...word].map((letter, index) => (
        <Letter
          key={index}
          letter={letter.letter}
          disabled={letter.disabled}
          onClick={() => {}}
        />
      ))}
    </div>
  );
};

export default Word;
