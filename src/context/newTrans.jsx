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
  const [inputList, setInputList] = useState([]);

  const hideBalance = () => {
    sethideBalToggle(!hideBalToggle);
  };

  // Function to handle editing an entry

  // Function to handle deleting an entry

  const handleSubmit = (e) => {
    e.preventDefault();
    if (transName.trim() === "" || amt.trim() === "") return;
    setFormData([...formData, { transName, amt }]);
    // Update input list with new entry
    setInputList([...inputList, formData]);

    setBalance(balance + parseInt(amt));
    if (amt > 0) {
      setIncome((prevIncome) => prevIncome + parseInt(amt));
    } else {
      setExpense((prevExp) => prevExp + Math.abs(parseInt(amt)));
    }

    setLastUp(new Date());
    setTrasnName("");
    setAmt("");
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
        setBalance,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};
