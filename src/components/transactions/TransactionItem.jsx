import { PropTypes } from "prop-types";
import { UseGlobalState } from "../../context/GlobalState";
import { MdDeleteForever } from "react-icons/md";

function TransactionItem({ id, description, amount }) {
  const { deleteTransaction } = UseGlobalState();

  return (
    <li className="bg-zinc-600 text-white px-4 py-2  rounded-md mb-2 w-full flex justify-between items-center">
      <p className="text-sm">{description}</p>
      <div className="flex items-center gap-4">
        <span>S/ {amount.toFixed(2)}</span>
        <button
          onClick={() => deleteTransaction(id)}
          className="bg-red-500 p-1 rounded-md hover:bg-red-600 transition-colors duration-300"
        >
          <MdDeleteForever className="text-xl" />
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;

TransactionItem.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
};
