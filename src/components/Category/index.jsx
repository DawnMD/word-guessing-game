import React from "react";

const Category = ({ category }) => {
  return (
    <div className='text-xl text-center p-2 my-2'>
      Guess the{" "}
      <span className='text-2xl font-semibold text-red-400'>
        {category.category.replace(/(^\w)/g, (m) => m.toUpperCase())}
      </span>
    </div>
  );
};

export default Category;
