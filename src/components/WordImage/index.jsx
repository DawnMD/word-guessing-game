const WordImage = ({ word }) => {
  return (
    <>
      <img
        className='rounded shadow-sm my-3 mx-auto'
        src={require(`../../assets/images/${word.toLowerCase()}.jpg`).default}
        alt={word}
      />
    </>
  );
};

export default WordImage;
