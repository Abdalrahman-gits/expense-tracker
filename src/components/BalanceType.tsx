type propsType = {
  type: string;
  children: string;
  amount: string;
};

function BalanceType({ type, amount, children }: propsType) {
  let color = "text-green-500";

  if (type === "expense") color = "text-red-500";
  return (
    <div>
      <p>{children}</p>
      <span className={`${color} inline-block w-full text-center`}>
        {amount}
      </span>
    </div>
  );
}

export default BalanceType;
