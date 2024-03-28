import { useContext } from "react";
import Card from "react-bootstrap/Card";
import "./Balance.css";
import { FormContext } from "../../context/newTrans";

const Balance = () => {
  const BalanceState = useContext(FormContext);

  return (
    <div className="balance-app">
      <>
        <h1 style={{ textAlign: "center", paddingTop: "1em" }}>
          Expense Tracker
        </h1>
        <Card className="Bal-container">
          <Card.Body className="center">
            <Card.Title>TOTAL BALANCE</Card.Title>
            {BalanceState.balance !== 0 && (
              <Card.Text
                className={BalanceState.balance < 0 ? "text-red" : "text-green"}
              >
                {BalanceState.balance}
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      </>
    </div>
  );
};

export default Balance;
