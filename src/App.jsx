import Balance from "./components/Balance/Balance";
import Header from "./components/Header";
import { Income } from "./components/Income_Exp/Income_Expense";
import MyComponent from "./components/Tp";
import Tp from "./components/Tp";
import Transactions from "./components/Transactions/Transactions";

import { IncomeProvider } from "./context/Income_Context";
import { FormProvider } from "./context/newTrans";
function App() {
  return (
    <>
      {/* <Header /> */}
      <FormProvider>
        <Balance />
        <IncomeProvider>
          <Income />
        </IncomeProvider>
        <Transactions />
      </FormProvider>
      {/* <Tp /> */}
    </>
  );
}

export default App;
