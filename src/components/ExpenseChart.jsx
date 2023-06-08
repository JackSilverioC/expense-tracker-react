import { VictoryPie, VictoryLabel } from "victory";
import { UseGlobalState } from "../context/GlobalState";

function ExpenseChart() {
  const { transactions } = UseGlobalState();

  const total = transactions.reduce(
    (acc, transactions) => (acc += Math.abs(transactions.amount)),
    0
  );

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpense =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const gastosPorcentaje = Math.round((totalExpense / total) * 100);
  const ingresosPorcentaje = 100 - gastosPorcentaje;

  const data = [
    { x: "Gastos", y: gastosPorcentaje },
    { x: "Ingresos", y: ingresosPorcentaje }
  ];
  if (totalIncome === 0 && totalExpense === 0)
    return <h1>No hay transacciones registradas</h1>;

  return (
    <VictoryPie
      colorScale={["#27374D", "#4F709C"]}
      data={data}
      animate={{
        duration: 200
      }}
      height={350}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      labelComponent={
        <VictoryLabel
          angle={0}
          textAnchor="middle"
          style={{
            fill: "white",
            fontSize: 14
          }}
        />
      }
    />
  );
}

export default ExpenseChart;
