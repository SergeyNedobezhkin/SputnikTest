export const formatCurrency = (value: number, currency: string) =>
  new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(value);