// import { useContext, useState } from "react";
// import { FormContext } from "../../context/newTrans";
// import { Card } from "react-bootstrap";
// import "./Transactions.css";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";

// const Transactions = () => {
//   const FormState = useContext(FormContext);
//   const [hideHistoryToggle, setHideHisToggle] = useState(false);
//   const [editIndex, setEditIndex] = useState(null); // State to track the index of the item being edited

//   const handleHideHistoryToggle = () => {
//     setHideHisToggle(!hideHistoryToggle);
//   };
//   const handleEdit = (index) => {
//     setEditIndex(index);
//     const editedItem = FormState.formData[index];
//     FormState.setTrasnName(editedItem.transName); // Set the name field to the current value being edited
//     FormState.setAmt(editedItem.amt); // Set the amount field to the current value being edited
//   };

//   const handleDelete = (index) => {
//     const updatedData = [...FormState.formData];
//     updatedData.splice(index, 1); // Remove item from the array
//     FormState.setFormData(updatedData); // Update context with new array
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editIndex !== null) {
//       // If editIndex is not null, it means we are editing an existing item
//       const updatedData = [...FormState.formData];
//       updatedData[editIndex] = {
//         transName: FormState.transName,
//         amt: FormState.amt,
//       }; // Update the item at editIndex
//       FormState.setFormData(updatedData); // Update context with new array
//       setEditIndex(null); // Reset editIndex
//     } else {
//       // If editIndex is null, it means we are adding a new item
//       FormState.handleSubmit(e); // Call the original submit handler to add the new item
//     }
//     // Clear input fields
//     FormState.setTrasnName("");
//     FormState.setAmt("");
//   };

//   return (
//     <>
//       <Card.Body>
//         <Card.Title>
//           <h1>History</h1>
//         </Card.Title>
//         <button onClick={handleHideHistoryToggle}>
//           {hideHistoryToggle ? (
//             <i
//               className="fa-solid fa-plus"
//               style={{
//                 display: "inline-flex",
//                 fontSize: "25px",
//                 background: "black",
//                 color: "white ",
//                 borderRadius: "5px",
//               }}
//             ></i>
//           ) : (
//             <i
//               className="fa-solid fa-minus"
//               style={{
//                 display: "inline-flex",
//                 fontSize: "25px",
//                 background: "black",
//                 color: "white ",
//                 borderRadius: "5px",
//               }}
//             ></i>
//           )}
//         </button>
//         {!hideHistoryToggle ? (
//           <ul className="list">
//             {FormState.formData.map((data, index) => (
//               <li key={index}>
//                 {data.transName} - {data.amt}
//                 <button onClick={() => handleEdit(index)}>Edit</button>{" "}
//                 {/* Edit button */}
//                 <button onClick={() => handleDelete(index)}>Delete</button>{" "}
//                 {/* Delete button */}
//               </li>
//             ))}
//           </ul>
//         ) : null}
//       </Card.Body>

//       <div>
//         <h1>Add new Transactions </h1>

//         <Form onSubmit={handleSubmit}>
//           <Row>
//             <Col>
//               <Form.Control
//                 placeholder="Enter text"
//                 type="text"
//                 value={FormState.transName}
//                 onChange={(e) => FormState.setTrasnName(e.target.value)}
//               />
//             </Col>
//             <Col>
//               <Form.Control
//                 placeholder="Enter Amount"
//                 type="number"
//                 value={FormState.amt}
//                 onChange={(e) => FormState.setAmt(e.target.value)}
//               />
//             </Col>
//           </Row>
//           <Button type="submit" variant="primary">
//             {editIndex !== null ? "Update" : "Add"}{" "}
//             {/* Change button text based on editIndex */}
//           </Button>
//         </Form>
//       </div>
//     </>
//   );
// };

// export default Transactions;

// import { useContext, useState } from "react";
// import { FormContext } from "../../context/newTrans";
// import { Card } from "react-bootstrap";
// import "./Transactions.css";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";

// const Transactions = () => {
//   const FormState = useContext(FormContext);
//   const [hideHistoryToggle, setHideHisToggle] = useState(false);
//   const [editIndex, setEditIndex] = useState(null); // State to track the index of the item being edited

//   const handleHideHistoryToggle = () => {
//     setHideHisToggle(!hideHistoryToggle);
//   };

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     const editedItem = FormState.formData[index];
//     FormState.setTrasnName(editedItem.transName); // Set the name field to the current value being edited
//     FormState.setAmt(editedItem.amt); // Set the amount field to the current value being edited
//   };

//   const handleDelete = (index) => {
//     const updatedData = [...FormState.formData];
//     updatedData.splice(index, 1); // Remove item from the array
//     FormState.setFormData(updatedData); // Update context with new array
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editIndex !== null) {
//       // If editIndex is not null, it means we are editing an existing item
//       const updatedData = [...FormState.formData];
//       updatedData[editIndex] = {
//         transName: FormState.transName,
//         amt: FormState.amt,
//       }; // Update the item at editIndex
//       FormState.setFormData(updatedData); // Update context with new array
//       setEditIndex(null); // Reset editIndex
//     } else {
//       // If editIndex is null, it means we are adding a new item
//       FormState.handleSubmit(e); // Call the original submit handler to add the new item
//     }
//     // Clear input fields
//     FormState.setTrasnName("");
//     FormState.setAmt("");
//   };

//   // Function to handle setting person name to the text field
//   const handleSetPersonName = (name) => {
//     FormState.setTrasnName(name);
//   };

//   // Array of person names
//   const personNames = [
//     "Person 1",
//     "Person 2",
//     "Person 3",
//     "Person 4",
//     "Person 5",
//     "Person 6",
//     "Person 7",
//     "Person 8",
//     "Person 9",
//     "Person 10",
//   ];

//   return (
//     <>
//       <Card.Body>
//         <Card.Title>
//           <h1>History</h1>
//         </Card.Title>
//         <button onClick={handleHideHistoryToggle}>
//           {hideHistoryToggle ? (
//             <i
//               className="fa-solid fa-plus"
//               style={{
//                 display: "inline-flex",
//                 fontSize: "25px",
//                 background: "black",
//                 color: "white ",
//                 borderRadius: "5px",
//               }}
//             ></i>
//           ) : (
//             <i
//               className="fa-solid fa-minus"
//               style={{
//                 display: "inline-flex",
//                 fontSize: "25px",
//                 background: "black",
//                 color: "white ",
//                 borderRadius: "5px",
//               }}
//             ></i>
//           )}
//         </button>
//         {!hideHistoryToggle ? (
//           <ul className="list">
//             {FormState.formData.map((data, index) => (
//               <li key={index}>
//                 {data.transName} - {data.amt}
//                 <button onClick={() => handleEdit(index)}>Edit</button>{" "}
//                 {/* Edit button */}
//                 <button onClick={() => handleDelete(index)}>Delete</button>{" "}
//                 {/* Delete button */}
//               </li>
//             ))}
//           </ul>
//         ) : null}
//       </Card.Body>

//       <div>
//         <h1>Add new Transactions </h1>

//         <Form onSubmit={handleSubmit}>
//           <Row>
//             <Col>
//               <Form.Control
//                 placeholder="Enter text"
//                 type="text"
//                 value={FormState.transName}
//                 onChange={(e) => FormState.setTrasnName(e.target.value)}
//               />
//             </Col>
//             <Col>
//               <Form.Control
//                 placeholder="Enter Amount"
//                 type="number"
//                 value={FormState.amt}
//                 onChange={(e) => FormState.setAmt(e.target.value)}
//               />
//             </Col>
//           </Row>
//           <Button type="submit" variant="primary">
//             {editIndex !== null ? "Update" : "Add"}{" "}
//             {/* Change button text based on editIndex */}
//           </Button>
//         </Form>
//       </div>

//       {/* Display 10 buttons with person names */}
//       <div className="person-buttons">
//         {personNames.map((name, index) => (
//           <Button key={index} onClick={() => handleSetPersonName(name)}>
//             {name}
//           </Button>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Transactions;

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
  const [editIndex, setEditIndex] = useState(null); // State to track the index of the item being edited

  const handleHideHistoryToggle = () => {
    setHideHisToggle(!hideHistoryToggle);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    const editedItem = FormState.formData[index];
    FormState.setTrasnName(editedItem.transName); // Set the name field to the current value being edited
    FormState.setAmt(editedItem.amt); // Set the amount field to the current value being edited
  };

  const handleDelete = (index) => {
    const updatedData = [...FormState.formData];
    updatedData.splice(index, 1); // Remove item from the array
    FormState.setFormData(updatedData); // Update context with new array
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // If editIndex is not null, it means we are editing an existing item
      const updatedData = [...FormState.formData];
      updatedData[editIndex] = {
        transName: FormState.transName,
        amt: FormState.amt,
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
  };

  // Function to handle setting person name and roll number to the fields
  const handleSetPerson = (name, rollNo) => {
    FormState.setTrasnName(name);
    FormState.setAmt(rollNo);
  };

  // Array of objects containing person names and roll numbers
  const persons = [
    { name: "John", rollNo: "101" },
    { name: "Jane", rollNo: "102" },
    { name: "Doe", rollNo: "103" },
    { name: "Alice", rollNo: "104" },
    { name: "Bob", rollNo: "105" },
    { name: "Eve", rollNo: "106" },
    { name: "Michael", rollNo: "107" },
    { name: "Emily", rollNo: "108" },
    { name: "David", rollNo: "109" },
    { name: "Sophia", rollNo: "110" },
  ];

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
                <button onClick={() => handleEdit(index)}>Edit</button>{" "}
                {/* Edit button */}
                <button onClick={() => handleDelete(index)}>Delete</button>{" "}
                {/* Delete button */}
              </li>
            ))}
          </ul>
        ) : null}
      </Card.Body>

      <div>
        <h1>Add new Transactions </h1>

        <div>
          {persons.map((person, index) => (
            <Button
              key={index}
              onClick={() => handleSetPerson(person.name, person.rollNo)}
            >
              {person.name} - {person.rollNo}
            </Button>
          ))}
        </div>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Control
                placeholder="Enter person name"
                type="text"
                value={FormState.transName}
                onChange={(e) => FormState.setTrasnName(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Enter roll number"
                type="number"
                value={FormState.amt}
                onChange={(e) => FormState.setAmt(e.target.value)}
              />
            </Col>
          </Row>
          <Button type="submit" variant="primary">
            {editIndex !== null ? "Update" : "Add"}{" "}
            {/* Change button text based on editIndex */}
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Transactions;
