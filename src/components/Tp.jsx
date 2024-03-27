import React, { useState, useEffect } from "react";

function Tp() {
  // State to hold input values
  const [formData, setFormData] = useState({ name: "", number: "" });

  // State to hold list of inputs
  const [inputList, setInputList] = useState([]);

  // State to hold balance
  const [balance, setBalance] = useState(0);

  // State to hold income and expense
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  // State to hold last updated time
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update input list with new entry
    setInputList([...inputList, formData]);
    // Update balance
    setBalance(balance + parseInt(formData.number));
    // Update last updated time
    setLastUpdated(new Date());
    // Clear form data
    setFormData({ name: "", number: "" });
  };

  // Function to handle editing an entry
  const handleEdit = (index, newValue) => {
    const newList = [...inputList];
    newList[index].name = newValue;
    setInputList(newList);
  };

  // Function to handle deleting an entry
  const handleDelete = (index) => {
    const deletedValue = inputList[index].number;
    setInputList(inputList.filter((item, i) => i !== index));
    setBalance(balance - parseInt(deletedValue));
    setLastUpdated(new Date());
  };

  // Function to calculate total income and expense
  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;

    inputList.forEach((item) => {
      if (parseInt(item.number) >= 0) {
        totalIncome += parseInt(item.number);
      } else {
        totalExpense += parseInt(item.number);
      }
    });

    setIncome(totalIncome);
    setExpense(totalExpense);
  }, [inputList]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Enter Number"
          value={formData.number}
          onChange={(e) => setFormData({ ...formData, number: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Balance: {balance}</h2>
        <div>
          <h3>Income: {income}</h3>
          <h3>Expense: {expense}</h3>
        </div>
        <p>
          Last updated {Math.floor((new Date() - lastUpdated) / 60000)} mins ago
        </p>
      </div>

      <ul>
        {inputList.map((item, index) => (
          <li
            key={index}
            onClick={() =>
              handleEdit(index, prompt("Edit the value:", item.name))
            }
          >
            {item.name}: {item.number}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tp;
