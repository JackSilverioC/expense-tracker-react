import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/transactions/IncomeExpenses";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 min-h-screen text-white flex flex-col justify-center items-center">
        <div className="container max-w-screen-md">
          <div className="gap-10 w-full p-10 rounded-lg bg-zinc-800 flex justify-between">
            <div className="w-1/2">
              <Header />
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="w-1/2 flex flex-col">
              <div className="py-10">
                <ExpenseChart />
              </div>
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
