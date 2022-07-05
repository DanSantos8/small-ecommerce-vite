export function normalizeCurrency(price: number) {
  return "US$ " + price.toFixed(2)
}
