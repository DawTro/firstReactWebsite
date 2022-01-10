import "./Offer.css";
import Squares from "../../../component/Squares";

function Offer() {
  return (
    <div className="offer" id="offer">
      <div className="head">
        <h2>Czym zajmuje się nasza firma?</h2>
      </div>
      <div className="offers">
        <Squares />
        {/* <Squares isNew />
        <Squares />
        <Squares />
        <Squares />
        <Squares />
        <Squares /> */}
      </div>
    </div>
  );
}

export default Offer;
