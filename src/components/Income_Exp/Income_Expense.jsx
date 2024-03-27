import { useContext } from "react";
import { FormContext } from "../../context/newTrans";
import "./Inc_Exp.css";
// import { IncomeContext, ExpenseContext } from "../../context/Income_Context";
import CardGroup from "react-bootstrap/CardGroup";
import { Card } from "react-bootstrap";

export const Income = () => {
  const IncomeState = useContext(FormContext);
  return (
    <>
      {IncomeState.hideBalToggle ? (
        <CardGroup className="income-exp-container">
          <Card>
            <Card.Body className="income-container">
              <Card.Title>
                INCOME
                <span className="arrow-up">
                  <i className="fa-solid fa-arrow-up"></i>{" "}
                </span>
              </Card.Title>
              <Card.Text className="inc-txt">+${IncomeState.income}</Card.Text>
            </Card.Body>

            <Card.Footer>
              <small className="text-muted">
                Last updated &nbsp;
                {Math.floor((new Date() - IncomeState.lastUp) / 60000)}
                mins ago
              </small>
            </Card.Footer>
          </Card>
          <div className="gap"></div>
          <Card>
            <Card.Body>
              <Card.Title>
                EXPENSE
                <span className="arrow-down">
                  <i className="fa-solid fa-arrow-down"></i>
                </span>
              </Card.Title>
              <Card.Text className="inc-txt">-${IncomeState.expense}</Card.Text>
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
