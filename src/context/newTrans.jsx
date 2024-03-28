import { createContext, useState } from "react";
export const FormContext = createContext(null);

export const FormProvider = (props) => {
  const [formData, setFormData] = useState([]);
  const [transName, setTrasnName] = useState("");
  const [transLabel, setTransLabel] = useState("");
  const [amt, setAmt] = useState("");
  const [date, setDate] = useState("");
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [hideBalToggle, sethideBalToggle] = useState(true);
  const [lastUp, setLastUp] = useState(new Date());
  const [inputList, setInputList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      transName.trim() === "" ||
      amt.trim() === "" ||
      transLabel.trim() === ""
    )
      return;
    setFormData([...formData, { transLabel, transName, amt, date }]);
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
    setTransLabel("");
    setAmt("");
    setDate("");
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        transName,
        transLabel,
        setTransLabel,
        setTrasnName,
        setAmt,
        handleSubmit,
        balance,
        amt,
        income,
        expense,
        hideBalToggle,
        sethideBalToggle,
        lastUp,
        date,
        setDate,
        setBalance,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};
