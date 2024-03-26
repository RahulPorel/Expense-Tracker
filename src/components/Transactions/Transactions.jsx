import { useContext, useState } from "react";
import { FormContext } from "../../context/newTrans";
import { Card } from "react-bootstrap";
import "./Transactions.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Transactions = () => {
  const FormState = useContext(FormContext);
  const [hideHistoryToggle, setHideHisToggle] = useState(false);

  const handleHideHistoryToggle = () => {
    setHideHisToggle(!hideHistoryToggle);
  };
  return (
    <>
      <Card.Body>
        <Card.Title>
          <h1>History</h1>
        </Card.Title>
        <button onClick={handleHideHistoryToggle}>
          {hideHistoryToggle ? (
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
        {!hideHistoryToggle ? (
          <ul className="list">
            {FormState.formData.map((data, index) => (
              <li key={index}>
                {data.transName} - {data.amt}
              </li>
            ))}
          </ul>
        ) : (
          <ul className="list">
            <li>No History</li>
          </ul>
        )}
      </Card.Body>

      <div>
        <h1>Add new Transactions </h1>

        <Form onSubmit={FormState.handleSubmit}>
          <Row>
            <Col>
              <Form.Control
                placeholder="Enter text"
                type="text"
                value={FormState.transName}
                onChange={(e) => FormState.setTrasnName(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Enter Amount"
                type="number"
                value={FormState.amt}
                onChange={(e) => FormState.setAmt(e.target.value)}
              />
            </Col>
          </Row>
          <Button type="submit" variant="primary">
            Add
          </Button>
        </Form>

        {/* <form onSubmit={FormState.handleSubmit}>
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
        </form> */}
      </div>
    </>
  );
};

export default Transactions;
