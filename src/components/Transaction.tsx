import { useAccount } from "../contexts/AccountContext";
import { formatCurrency } from "../utils/formatCurrency";

function Transaction({
  text,
  amount,
  id,
}: {
  text: string;
  amount: number;
  id: number;
}) {
  const { dispatch } = useAccount();

  let borderColor = "border-r-green-500";
  if (amount < 0) {
    borderColor = "border-r-red-500";
    amount = -amount;
  }

  function handleDeleteTransaction() {
    dispatch({ type: "account/delete", payload: { id, text, amount } });
  }

  return (
    <li
      className={`${borderColor} flex items-center justify-between border-r-4 border-b-2 border-stone-300 bg-white px-3 py-2.5 capitalize`}
    >
      <p>{text}</p>
      <div className="flex gap-2">
        <span>{formatCurrency(amount)}</span>
        <button
          onClick={handleDeleteTransaction}
          className="cursor-pointer text-sm"
        >
          ❌
        </button>
      </div>
    </li>
  );
}

export default Transaction;
