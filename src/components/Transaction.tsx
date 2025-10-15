function Transaction({ text, amount }: { text: string; amount: number }) {
  let borderColor = "border-r-green-500";
  if (amount < 0) {
    borderColor = "border-r-red-500";
    amount = -amount;
  }

  return (
    <li
      className={`${borderColor} flex items-center justify-between border-r-4 border-b-2 border-stone-300 bg-white px-3 py-2.5 capitalize`}
    >
      <p>{text}</p>
      <span>{amount}</span>
    </li>
  );
}

export default Transaction;
