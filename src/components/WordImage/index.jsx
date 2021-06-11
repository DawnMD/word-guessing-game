const WordImage = ({ word }) => {
  return (
    <>
      <img
        className='rounded shadow-sm my-2'
        src={require(`../../assets/images/${word.toLowerCase()}.jpg`).default}
        alt={word}
      />
    </>
  );
};

export default WordImage;
