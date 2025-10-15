import TotalBalance from "./TotalBalance";
import Header from "./Header";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

function AppLayout() {
  return (
    <div className="mx-auto max-w-sm px-3.5">
      <Header />
      <TotalBalance />
      <TransactionList />
      <TransactionForm />
    </div>
  );
}

export default AppLayout;
