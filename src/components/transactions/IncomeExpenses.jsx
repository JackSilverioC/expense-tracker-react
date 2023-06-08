import { UseGlobalState } from "../../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = UseGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <>
      <div className="flex justify-between my-2">
        <h4>Ingresos:</h4>
        <p>S/ {income}</p>
      </div>
      <div className="flex justify-between my-2">
        <h4>Gastos:</h4>
        <p>S/ {expense}</p>
      </div>
    </>
  );
}

export default IncomeExpenses;
