import React from "react";

const Category = ({ category }) => {
  return (
    <div className='w-full text-2xl text-center p-3 my-3 h-16'>
      Guess the{" "}
      <span className='text-3xl font-semibold text-red-400'>
        {category.category.replace(/(^\w)/g, (m) => m.toUpperCase())}
      </span>
    </div>
  );
};

export default Category;
