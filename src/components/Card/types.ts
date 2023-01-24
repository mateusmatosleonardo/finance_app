import { ITransactions } from '../Transactions/types';

export interface ICard {
  id: number;
  number_card: string;
  balance: string;
  transactions: ITransactions[];
  flag: 'cc-visa' | 'cc-mastercard' | 'cc-discover' | 'cc-amex' | 'cc-paypal' | 'cc-diners-club';
}
