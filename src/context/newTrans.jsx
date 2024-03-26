import { createContext, useState } from "react";

export const FormContext = createContext(null);

export const FormProvider = (props) => {
  const [formData, setFormData] = useState([]);
  const [transName, setTrasnName] = useState("");
  const [amt, setAmt] = useState("");
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [hideBalToggle, sethideBalToggle] = useState(true);
  const [lastUp, setLastUp] = useState(new Date());
  const [items, setItems] = useState([]);

  const hideBalance = () => {
    sethideBalToggle(!hideBalToggle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (transName.trim() === "" || amt.trim() === "") return;
    setFormData([...formData, { transName, amt }]);
    setBalance(balance + parseInt(amt));
    if (amt > 0) {
      setIncome((prevIncome) => prevIncome + parseInt(amt));
    } else {
      setExpense((prevExp) => prevExp + Math.abs(parseInt(amt)));
    }
    const newItem = {
      name: formData.name,
      number: parseFloat(formData.number),
    };

    setItems([...items, newItem]);
    setLastUp(new Date());
    setTrasnName("");
    setAmt("");
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

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        transName,
        setTrasnName,
        setAmt,
        handleSubmit,
        balance,
        amt,
        income,
        expense,
        hideBalToggle,
        sethideBalToggle,
        hideBalance,
        lastUp,

        items,
        handleEdit,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};
