import { createContext, useState } from "react";

export const IncomeContext = createContext(null);
export const IncomeProvider = (props) => {
  const [income, setIncome] = useState(100);
  return (
    <IncomeContext.Provider value={{ income, setIncome }}>
      {props.children}
    </IncomeContext.Provider>
  );
};
