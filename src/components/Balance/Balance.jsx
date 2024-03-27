import { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import "./Balance.css";
import Button from "react-bootstrap/Button";
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
  console.log(BalanceState.balance);

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
          <Card className="Bal-container">
            <Card.Body className="center">
              <Card.Title>TOTAL BALANCE</Card.Title>
              {BalanceState.balance !== 0 && (
                <Card.Text
                  className={
                    BalanceState.balance < 0 ? "text-red" : "text-green"
                  }
                >
                  ${BalanceState.balance}
                </Card.Text>
              )}

            
            </Card.Body>
          </Card>
        
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
