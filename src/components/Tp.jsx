import React, { useState, useEffect } from "react";

function Tp() {
  const [formData, setFormData] = useState({ name: "", number: "" });
  const [items, setItems] = useState([]);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.number) return;

    const newItem = {
      name: formData.name,
      number: parseFloat(formData.number),
    };

    setItems([...items, newItem]);
    setBalance((prevBalance) => prevBalance + newItem.number);
    newItem.number > 0
      ? setIncome((prevIncome) => prevIncome + newItem.number)
      : setExpense((prevExpense) => prevExpense + Math.abs(newItem.number));
    setFormData({ name: "", number: "" });
    setLastUpdated(new Date());
  };

  const handleEdit = (index) => {
    const editedItem = items[index];
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
    setBalance((prevBalance) => prevBalance - editedItem.number);
    editedItem.number > 0
      ? setIncome((prevIncome) => prevIncome - editedItem.number)
      : setExpense((prevExpense) => prevExpense - Math.abs(editedItem.number));
    setFormData({
      name: editedItem.name,
      number: editedItem.number.toString(),
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 180000); // Update every 3 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="number"
          placeholder="Enter number"
          value={formData.number}
          onChange={handleChange}
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
        {items.map((item, index) => (
          <li key={index} onClick={() => handleEdit(index)}>
            {item.name} - {item.number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tp;
