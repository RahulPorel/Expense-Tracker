import { createContext, useState } from "react";

export const FormContext = createContext(null);

export const FormProvider = (props) => {
  const [formData, setFormData] = useState([]);
  const [transName, setTrasnName] = useState("");
  const [amt, setAmt] = useState("");
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

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
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};
