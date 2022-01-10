const Square = ({ id, text, isNew }) => {
  if (isNew === true) {
    return (
      <div className="boxwithdot">
        <p>
          {text} <br /> (nowość)
        </p>
      </div>
    );
  } else {
    return (
      <div className="smallbox">
        <p>{text}</p>
      </div>
    );
  }
};

export default Square;
