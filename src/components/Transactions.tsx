import { useAccount } from "../contexts/AccountContext";
import Transaction from "./Transaction";

function Transactions() {
  const {
    state: { balanceHistory },
  } = useAccount();

  return (
    <div className="mt-5">
      <h2 className="mb-3 border-b-2 border-b-stone-400 pb-1.5">History</h2>
      {balanceHistory.length > 0 ? (
        <ul className="space-y-2.5">
          {balanceHistory.map((trans) => (
            <Transaction text={trans.text} amount={trans.amount} />
          ))}
        </ul>
      ) : (
        <p className="text-center font-semibold text-stone-800">
          No transactions happened yet
        </p>
      )}
    </div>
  );
}

export default Transactions;
