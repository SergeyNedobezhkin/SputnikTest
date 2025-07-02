export const Currency = {
  RUB: 'RUB',
  USD: 'USD',
  EUR: 'EUR',
} as const;

export type Currency = typeof Currency[keyof typeof Currency];

export type ProductCardProps = {
  title: string;
  origin: string;
  price: number;
  currency: Currency;
  imageUrl: string;
};
