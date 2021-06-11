import React from "react";
import Letter from "../Letter";
const Word = ({ word }) => {
  return (
    <div className='flex justify-center p-2 my-2 flex-wrap'>
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
