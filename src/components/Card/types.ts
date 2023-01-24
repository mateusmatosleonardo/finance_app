export interface ICard {
  index: number;
  number_card: string;
  balance: string;
  flag: 'cc-visa' | 'cc-mastercard' | 'cc-discover' | 'cc-amex' | 'cc-paypal' | 'cc-diners-club';
}
