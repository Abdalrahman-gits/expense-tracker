import { useAccount } from "../contexts/AccountContext";
import { formatCurrency } from "../utils/formatCurrency";
import BalanceType from "./BalanceType";

function BalanceDetails() {
  const { state } = useAccount();
  return (
    <div className="relative flex items-center justify-between border-b-2 border-stone-400 bg-white px-8 py-4 uppercase shadow-md before:absolute before:top-[50%] before:left-[50%] before:h-12 before:w-0.5 before:translate-[-50%] before:bg-stone-200 before:content-['']">
      <BalanceType type="primary" amount={formatCurrency(state.income)}>
        income
      </BalanceType>
      <BalanceType type="expense" amount={formatCurrency(state.expense)}>
        expense
      </BalanceType>
    </div>
  );
}

export default BalanceDetails;
