export function normalizeCurrency(price: any) {
  return "US$ " + price.toFixed(2)
}
