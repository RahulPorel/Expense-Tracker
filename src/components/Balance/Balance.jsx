// import { useContext } from "react";
// import Card from "react-bootstrap/Card";
// import "./Balance.css";

// import { FormContext } from "../../context/newTrans";

// const Balance = () => {
//   const BalanceState = useContext(FormContext);
//   console.log(FormContext.balance);

//   return (
//     <div className="balance-app">
//       <button onClick={BalanceState.hideBalance}>
//         {!BalanceState.hideBalToggle ? (
//           <i
//             className="fa-solid fa-plus"
//             style={{
//               display: "inline-flex",
//               fontSize: "25px",
//               background: "black",
//               color: "white ",
//               borderRadius: "5px",
//             }}
//           ></i>
//         ) : (
//           <i
//             className="fa-solid fa-minus"
//             style={{
//               display: "inline-flex",
//               fontSize: "25px",
//               background: "black",
//               color: "white ",
//               borderRadius: "5px",
//             }}
//           ></i>
//         )}
//       </button>

//       {BalanceState.hideBalToggle ? (
//         <>
//           <Card.Body>
//             <Card.Title>YOUR BALANCE</Card.Title>
//             <h2>${BalanceState.balance}</h2>
//           </Card.Body>
//         </>
//       ) : null}

//       <div className="d-flex justify-content-around"></div>
//     </div>
//   );
// };

// export default Balance;

import { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import "./Balance.css";

import { FormContext } from "../../context/newTrans";

const Balance = () => {
  const BalanceState = useContext(FormContext);

  const [editMode, setEditMode] = useState(false);
  const [newBalance, setNewBalance] = useState(BalanceState.balance);

  const handleEditBalance = () => {
    setEditMode(true);
  };

  const handleUpdateBalance = () => {
    BalanceState.setBalance(newBalance);
    setEditMode(false);
  };

  return (
    <div className="balance-app">
      <button onClick={BalanceState.hideBalance}>
        {!BalanceState.hideBalToggle ? (
          <i
            className="fa-solid fa-plus"
            style={{
              display: "inline-flex",
              fontSize: "25px",
              background: "black",
              color: "white ",
              borderRadius: "5px",
            }}
          ></i>
        ) : (
          <i
            className="fa-solid fa-minus"
            style={{
              display: "inline-flex",
              fontSize: "25px",
              background: "black",
              color: "white ",
              borderRadius: "5px",
            }}
          ></i>
        )}
      </button>

      {BalanceState.hideBalToggle && !editMode && (
        <>
          <Card.Body>
            <Card.Title>YOUR BALANCE</Card.Title>
            <h2>${BalanceState.balance}</h2>
            <button onClick={handleEditBalance}>Edit Balance</button>
          </Card.Body>
        </>
      )}

      {editMode && (
        <>
          <Card.Body>
            <Card.Title>EDIT BALANCE</Card.Title>
            <input
              type="number"
              value={newBalance}
              onChange={(e) => setNewBalance(e.target.value)}
            />
            <button onClick={handleUpdateBalance}>Update Balance</button>
          </Card.Body>
        </>
      )}

      <div className="d-flex justify-content-around"></div>
    </div>
  );
};

export default Balance;
