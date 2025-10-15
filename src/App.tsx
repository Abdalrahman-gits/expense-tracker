import AppLayout from "./components/AppLayout";
import { AccountProvider } from "./contexts/AccountContext";

function App() {
  return (
    <div>
      <AccountProvider>
        <AppLayout />
      </AccountProvider>
    </div>
  );
}

export default App;
