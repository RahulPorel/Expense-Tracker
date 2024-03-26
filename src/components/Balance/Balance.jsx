import { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import "./Balance.css";

import { FormContext } from "../../context/newTrans";

const Balance = () => {
  const BalanceState = useContext(FormContext);
  const [hideBalToggle, sethideBalToggle] = useState(true);

  const hideBalance = () => {
    sethideBalToggle(!hideBalToggle);
  };

  return (
    <div className="balance-app">
      <button onClick={hideBalance}>
        {!hideBalToggle ? (
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

      {hideBalToggle ? (
        <>
          <Card.Body>
            <Card.Title>YOUR BALANCE</Card.Title>
            <h2>${BalanceState.balance}</h2>
          </Card.Body>
        </>
      ) : null}
      <div className="d-flex justify-content-around"></div>
    </div>
  );
  // <div>
  //   <h1>Your Bal is ${BalanceState.balance}</h1>
  // </div>
};

export default Balance;
