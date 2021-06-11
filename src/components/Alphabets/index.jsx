import React from "react";
import Letter from "../Letter";
// import "./Alphabet.css";

const Alphabet = ({ letters, onClick }) => (
  <div className='p-2 my-2 flex flex-wrap justify-center md:w-8/12 xl:w-5/12'>
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
