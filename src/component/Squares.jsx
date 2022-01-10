import React from "react";
import "./Squares.css";
import Square from "./Square";

function Squares(props) {
  const squares = [
    {
      id: 1,
      text: "Usługa 1",
      isNew: true,
    },
    {
      id: 2,
      text: "Usługa 2",
      isNew: false,
    },
    {
      id: 3,
      text: "Usługa 3",
      isNew: false,
    },
    {
      id: 4,
      text: "Usługa 4",
      isNew: false,
    },
    {
      id: 5,
      text: "Usługa 5",
      isNew: false,
    },
    {
      id: 6,
      text: "Usługa 6",
      isNew: false,
    },
  ];

  return (
    <>
      {squares.map(({ id, isNew, text }) => {
        return <Square id={id} isNew={isNew} text={text} />;
      })}
    </>
  );
}
// function Squares({ isNew }) {
//   if (isNew === true) {
//     return (
//       <div className="boxwithdot">
//         <p>
//           Usługa
//           <br />
//           (nowość)
//         </p>
//       </div>
//     );
//   } else {
//     return (
//       <div className="smallbox">
//         <p>Usługa</p>
//       </div>
//     );
//   }
// }

export default Squares;
