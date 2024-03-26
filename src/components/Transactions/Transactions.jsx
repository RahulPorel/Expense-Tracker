import { useContext } from "react";
import { FormContext } from "../../context/newTrans";
import { Card } from "react-bootstrap";
import "./Transactions.css";

const Transactions = () => {
  const FormState = useContext(FormContext);
  return (
    <>
      <Card.Body>
        <Card.Title>
          <h1>History</h1>
        </Card.Title>

        <ul className="list">
          {FormState.formData.map((data, index) => (
            <li key={index}>
              {data.transName} - {data.amt}
            </li>
          ))}
        </ul>
      </Card.Body>

      <div>
        <h1>Add new Transactions </h1>
        <form onSubmit={FormState.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={FormState.transName}
              onChange={(e) => FormState.setTrasnName(e.target.value)}
            />
          </label>
          <label>
            Number:
            <input
              type="number"
              value={FormState.amt}
              onChange={(e) => FormState.setAmt(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Transactions;
