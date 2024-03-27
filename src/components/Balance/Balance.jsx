import { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import "./Balance.css";

import { FormContext } from "../../context/newTrans";

const Balance = () => {
  const BalanceState = useContext(FormContext);
  const [editMode, setEditMode] = useState(false);
  const [newBalance, setNewBalance] = useState(BalanceState.balance);

  // const handleEditBalance = () => {
  //   setEditMode(true);
  // };

  const handleUpdateBalance = () => {
    BalanceState.setBalance(newBalance);
    setEditMode(false);
  };

  return (
    <div className="balance-app">
      <>
        <Card className="Bal-container">
          <Card.Body className="center">
            <Card.Title>TOTAL BALANCE</Card.Title>
            {BalanceState.balance !== 0 && (
              <Card.Text
                className={BalanceState.balance < 0 ? "text-red" : "text-green"}
              >
                ${BalanceState.balance}
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      </>

      <div className="d-flex justify-content-around"></div>
    </div>
  );
};

export default Balance;
