import { useContext } from "react";
import { FormContext } from "../../context/newTrans";
// import { IncomeContext, ExpenseContext } from "../../context/Income_Context";
import CardGroup from "react-bootstrap/CardGroup";
import { Card } from "react-bootstrap";

export const Income = () => {
  const IncomeState = useContext(FormContext);
  console.log(IncomeState.income);
  return (
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>INCOME</Card.Title>
          <Card.Text>+${IncomeState.income}</Card.Text>
        </Card.Body>

        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>EXPENSE</Card.Title>
          <Card.Text>-${IncomeState.expense}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

    // <div>
    //   <h2>Income: ${IncomeState.income}</h2>
    //   <h3>Exp: ${IncomeState.expense}</h3>
    //   {/* <h2>Expense: ${IncomeState.expense.toFixed(2)}</h2> */}
    // </div>
  );
};
