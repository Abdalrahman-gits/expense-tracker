import TotalBalance from "./TotalBalance";
import Header from "./Header";
import TransactionForm from "./TransactionForm";
import Transactions from "./Transactions";

function AppLayout() {
  return (
    <div className="mx-auto max-w-sm px-3.5">
      <Header />
      <TotalBalance />
      <Transactions />
      <TransactionForm />
    </div>
  );
}

export default AppLayout;
