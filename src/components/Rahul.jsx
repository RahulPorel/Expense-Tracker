import Card from "react-bootstrap/Card";

import CardGroup from "react-bootstrap/CardGroup";
import { useState } from "react";

const Rahul = () => {
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
            <h2>$ 100</h2>
          </Card.Body>

          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>INCOME</Card.Title>
                <Card.Text>+ $50.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>EXPENSE</Card.Title>
                <Card.Text>-$10.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </>
      ) : null}
      <div className="d-flex justify-content-around"></div>
    </div>
  );
};

export default Rahul;
