import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../context/newTrans";
import { Card } from "react-bootstrap";
import "./Transactions.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = "0" + dd;
if (mm < 10) mm = "0" + mm;

const formattedToday = yyyy + "-" + mm + "-" + dd;

const Transactions = () => {
  const FormState = useContext(FormContext);
  const [hideHistoryToggle, setHideHisToggle] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // State to track the index of the item being edited
  const [shuffledPersons, setShuffledPersons] = useState([]);
  const [hideAddTrans, setHideAddTrans] = useState(false);

  const handleHideHistoryToggle = () => {
    setHideHisToggle(!hideHistoryToggle);
  };

  const handleHideAddTransToggle = () => {
    setHideAddTrans(!hideAddTrans);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    const editedItem = FormState.formData[index];
    FormState.setTrasnName(editedItem.transName); // Set the name field to the current value being edited
    FormState.setDate(editedItem.date); // Set the name field to the current value being edited
    FormState.setAmt(editedItem.amt); // Set the amount field to the current value being edited
  };

  const handleDelete = (index) => {
    const updatedData = [...FormState.formData];
    updatedData.splice(index, 1); // Remove item from the array
    FormState.setFormData(updatedData); // Update context with new array
  };

  console.log(FormState.formData.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // If editIndex is not null, it means we are editing an existing item
      const updatedData = [...FormState.formData];
      updatedData[editIndex] = {
        transName: FormState.transName,
        amt: FormState.amt,
        date: FormState.date,
      }; // Update the item at editIndex
      FormState.setFormData(updatedData); // Update context with new array
      setEditIndex(null); // Reset editIndex
    } else {
      // If editIndex is null, it means we are adding a new item
      FormState.handleSubmit(e); // Call the original submit handler to add the new item
    }
    // Clear input fields
    FormState.setTrasnName("");
    FormState.setAmt("");
    FormState.setDate(formattedToday); // Set present date
  };

  // Function to handle setting person name and roll number to the fields
  const handleSetPerson = (name, rollNo) => {
    FormState.setTrasnName(name);
    FormState.setAmt(rollNo);
    FormState.setDate(formattedToday);
  };

  // Array of objects containing person names and roll numbers
  const persons = [
    { name: "Salary ", rollNo: "2000" },
    { name: "Transport", rollNo: "-350" },
    { name: "Medical", rollNo: "-1200" },
    { name: "Entertaiment ", rollNo: "400" },
    { name: "Personal", rollNo: "-200" },
    { name: "Miscellaneous", rollNo: "-125" },
    { name: "Dividends ", rollNo: "1500" },
    { name: "Travel", rollNo: "-1000" },
    { name: "Inheritances", rollNo: "25500" },
    { name: "Utility bills", rollNo: "-100" },
  ];

  useEffect(() => {
    shuffleArray(persons);
    setShuffledPersons([...persons]);
  }, [hideAddTrans]);

  // Function to shuffle the array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return (
    <>
      <Card.Body>
        <h1>Transactions History</h1>
        {FormState.formData.length >= 1 ? (
          <ul className="list">
            {FormState.formData.map((data, index) => (
              <li key={index}>
                <button
                  className="rm-btn-styling"
                  onClick={() => handleEdit(index)}
                >
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <span className="trans-name">
                  {data.transName}
                  <span className="trans-name-desc">Housing</span>
                </span>
                {data.amt !== 0 && (
                  <span
                    id="amt"
                    className={data.amt < 0 ? "text-red" : "text-green"}
                  >
                    $ {data.amt}
                    <span className="date">{data.date || formattedToday}</span>
                  </span>
                )}
                {/* Edit button */}
                <button
                  className="rm-btn-styling"
                  onClick={() => handleDelete(index)}
                >
                  <i className="fa-solid fa-delete-left"></i>
                </button>{" "}
                {/* Delete button */}
              </li>
            ))}
          </ul>
        ) : (
          <ul className="list">
            <li>
              <button className="rm-btn-styling">
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
              <span className="trans-name">
                No Transaction
                <span className="trans-name-desc">Add new Transaction</span>
              </span>
              <span id="amt" className="text-green">
                $ NULL
                <span className="date">{formattedToday}</span>
              </span>
              {/* Edit button */}
              <button className="rm-btn-styling">
                <i className="fa-solid fa-delete-left"></i>
              </button>
              {/* Delete button */}
            </li>
          </ul>
        )}
      </Card.Body>

      {/* space */}
      <hr />
      <div className="add-new-trans-container">
        <h1>
          <i className="fa-solid fa-circle-plus"></i> &nbsp; Add new
          Transactions{" "}
        </h1>
        {hideAddTrans ? console.log("gugy") : ""}

        <div>
          <Form.Label>Random Labels </Form.Label>
          {shuffledPersons.map((person, index) => (
            <Button
              variant="outline-dark"
              className="modal-btn-container"
              key={index}
              onClick={() => handleSetPerson(person.name, person.rollNo)}
            >
              <span className="select-modal-transName">{person.name}</span>
            </Button>
          ))}
        </div>
        <Form className="add-new-form" onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Label>Transactions Name </Form.Label>
              <Form.Control
                placeholder="Name ex: macbook air"
                type="text"
                value={FormState.transName}
                onChange={(e) => FormState.setTrasnName(e.target.value)}
              />
            </Col>

            <Col>
              <Form.Label>Transactions Label </Form.Label>
              <Form.Control
                placeholder="Label ex: rent, medical"
                type="text"
                value={FormState.transName}
                onChange={(e) => FormState.setTrasnName(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Label>Transactions Cost </Form.Label>

              <Form.Control
                placeholder="Cost ex: $100, $200"
                type="number"
                value={FormState.amt}
                onChange={(e) => FormState.setAmt(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Label>Date of Purchase </Form.Label>

              <Form.Control
                placeholder="Enter name"
                type="date"
                value={FormState.date || formattedToday}
                onChange={(e) => FormState.setDate(e.target.value)}
              />
              <Form.Label style={{ fontSize: " 14px" }}>
                ( Optional )
              </Form.Label>
            </Col>
          </Row>

          <div className="d-grid gap-2 add-btn">
            <Button size="lg" type="submit" variant="primary">
              {editIndex !== null ? "Update" : "Add"}{" "}
              {/* Change button text based on editIndex */}
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Transactions;
