import { createContext, useContext, useReducer, type ReactNode } from "react";

type balanceType = {
  id: number;
  text: string;
  amount: number;
};

type initType = {
  balance: number;
  income: number;
  expense: number;
  balanceHistory: balanceType[];
};

type actionType = {
  type: string;
  payload: balanceType;
};

type AccountContextType = {
  state: initType;
  dispatch: React.Dispatch<actionType>;
};

const AccountContext = createContext<AccountContextType | undefined>(undefined);

const initialState: initType = {
  balance: 0,
  income: 0,
  expense: 0,
  balanceHistory: [],
};

function reducer(state: initType, action: actionType): initType {
  switch (action.type) {
    case "account/income":
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        income: state.income + action.payload.amount,
        balanceHistory: [
          {
            id: action.payload.id,
            text: action.payload.text,
            amount: action.payload.amount,
          },
          ...state.balanceHistory,
        ],
      };

    case "account/expense":
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        expense: state.expense + -action.payload.amount,
        balanceHistory: [
          {
            id: action.payload.id,
            text: action.payload.text,
            amount: action.payload.amount,
          },
          ...state.balanceHistory,
        ],
      };

    case "account/delete":
      return {
        ...state,
        balanceHistory: state.balanceHistory.filter(
          (trans) => trans.id !== action.payload.id,
        ),
      };

    default:
      throw new Error("unknown case !!");
  }
}

function AccountProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AccountContext.Provider value={{ state, dispatch }}>
      {children}
    </AccountContext.Provider>
  );
}

function useAccount() {
  const context = useContext(AccountContext);

  if (!context) throw new Error("Context has been used outside it's provider");

  return context;
}

export { AccountProvider, useAccount };
