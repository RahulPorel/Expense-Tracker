import Balance from "./components/Balance/Balance";
import { Income } from "./components/Income_Exp/Income_Expense";
import Transactions from "./components/Transactions/Transactions";
import { IncomeProvider } from "./context/Income_Context";
import { FormProvider } from "./context/newTrans";

function App() {
  return (
    <>
      <FormProvider>
        <Balance />
        <IncomeProvider>
          <Income />
        </IncomeProvider>
        <Transactions />
      </FormProvider>
    </>
  );
}

export default App;
