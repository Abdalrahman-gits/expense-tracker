import { useAccount } from "../contexts/AccountContext";
import { formatCurrency } from "../utils/formatCurrency";
import BalanceDetails from "./BalanceDetails";

function TotalBalance() {
  const { state } = useAccount();
  return (
    <div>
      <div className="mb-2">
        <p className="text-sm uppercase">your balance</p>
        <span className="text-2xl font-semibold">
          {formatCurrency(state.balance)}
        </span>
      </div>
      <BalanceDetails />
    </div>
  );
}

export default TotalBalance;
