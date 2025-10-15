function formatCurrency(currency: number): string {
  return Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(currency);
}

export { formatCurrency };
