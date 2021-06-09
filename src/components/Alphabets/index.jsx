import React from "react";
import Letter from "../Letter";
// import "./Alphabet.css";

const Alphabet = ({ letters, onClick }) => (
  <div className='px-4 py-2 text-center md:w-8/12 xl:w-5/12'>
    {[...letters].map((letter, index) => {
      return (
        <Letter
          key={index}
          letter={letter}
          disabled={letter.disabled}
          onClick={onClick}
          role='button'
        />
      );
    })}
  </div>
);
export default Alphabet;
