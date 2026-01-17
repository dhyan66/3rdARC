export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function clampIndex(value: number, length: number) {
  if (length === 0) return 0;
  return (value + length) % length;
}
