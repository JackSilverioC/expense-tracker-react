import { useState } from "react";
import { UseGlobalState } from "../../context/GlobalState";

function TransactionForm() {
  const { addTransaction } = UseGlobalState();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "0" || amount === "") {
      return alert("El monto no puede ser 0");
    }

    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount
    });
    setDescription("");
    setAmount("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Ingresa una descripción"
          className="bg-white text-black px-4 py-2 rounded-md block mb-2 w-full"
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          type="number"
          step="0.01"
          placeholder="00.00"
          className="bg-white text-black px-4 py-2 rounded-md block mb-2 w-full"
        />
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Añadir transacción
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
