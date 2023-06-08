import { UseGlobalState } from "../../context/GlobalState";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  const { transactions } = UseGlobalState();
  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold w-full">
        Historial de transacciones
      </h3>
      <ul>
        {transactions.map(({ id, description, amount }) => {
          return (
            <TransactionItem
              key={id}
              id={id}
              description={description}
              amount={amount}
            />
          );
        })}
      </ul>
    </>
  );
}

export default TransactionList;
