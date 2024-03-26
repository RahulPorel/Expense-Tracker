import { useContext } from "react";
import { FormContext } from "../../context/newTrans";
// import { IncomeContext, ExpenseContext } from "../../context/Income_Context";
import CardGroup from "react-bootstrap/CardGroup";
import { Card } from "react-bootstrap";

export const Income = () => {
  const IncomeState = useContext(FormContext);
  return (
    <>
      {IncomeState.hideBalToggle ? (
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>INCOME</Card.Title>
              <Card.Text>+${IncomeState.income}</Card.Text>
            </Card.Body>

            <Card.Footer>
              <small className="text-muted">
                Last updated &nbsp;
                {Math.floor((new Date() - IncomeState.lastUp) / 60000)}
                mins ago
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>EXPENSE</Card.Title>
              <Card.Text>-${IncomeState.expense}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Last updated &nbsp;
                {Math.floor((new Date() - IncomeState.lastUp) / 60000)}
                mins ago
              </small>
            </Card.Footer>
          </Card>
        </CardGroup>
      ) : null}
    </>
  );
};
