import { UseGlobalState } from "../context/GlobalState";

function Balance() {
  const { transactions } = UseGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="flex justify-between items-center mb-2 bg-zinc-600 rounded-md px-2 py-2">
      <h3 className="text-xl">Balance:</h3>
      <h1 className="text-xl font-bold ">S/ {total}</h1>
    </div>
  );
}

export default Balance;
