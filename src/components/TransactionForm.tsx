import { useState } from "react";
import { useAccount } from "../contexts/AccountContext";

function TransactionForm() {
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [errors, setErrors] = useState<string>("");
  const {
    state: { balance },
    dispatch,
  } = useAccount();

  function handleSumbit(e: React.FormEvent): void {
    e.preventDefault();

    if (!text.trim() || !amount.trim()) {
      setErrors("Please fill both text and amount");
      return;
    }

    if (Number.isNaN(Number(amount))) {
      setErrors("Please check that amount is a number");
      return;
    }

    if (Number(amount) > 0)
      dispatch({
        type: "account/income",
        payload: { id: Date.now(), text, amount: Number(amount) },
      });
    else {
      const canExpense = balance >= -Number(amount);
      if (canExpense)
        dispatch({
          type: "account/expense",
          payload: { id: Date.now(), text, amount: Number(amount) },
        });
      else {
        setErrors("Withdrawl has been failed");
        setText("");
        setAmount("");
        return;
      }
    }

    setText("");
    setAmount("");
    setErrors("");
  }

  return (
    <div className="mt-5">
      <h2 className="mb-3 border-b-2 border-b-stone-400 pb-1.5">
        Add new transaction
      </h2>
      <form className="space-y-3" onSubmit={handleSumbit}>
        <div className="flex flex-col gap-y-1.5">
          <label htmlFor="">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full border-2 border-stone-300 bg-white px-4 py-2 outline-none placeholder:text-stone-300"
          />
        </div>
        <div className="flex flex-col gap-y-1.5">
          <label htmlFor="">
            Amount
            <br />
            (negative-expense,positive-income)
          </label>
          <input
            type="text"
            placeholder="Enter amount..."
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border-2 border-stone-300 bg-white px-4 py-2 outline-none placeholder:text-stone-300"
          />
        </div>
        <div className="mb-7">
          <button className="w-full cursor-pointer bg-indigo-700 px-4 py-2 text-white duration-300 outline-none hover:bg-indigo-800">
            Add transaction
          </button>
          {errors.trim().length > 0 && (
            <p className="mt-2 rounded-lg bg-red-200 p-2 text-center text-xs text-red-500">
              {errors}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
