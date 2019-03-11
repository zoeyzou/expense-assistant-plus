export type ExpenseList = {
  expenses: Expense[];
  total: number;
};

export type Expense = {
  id: string;
  amount: Amount;
  date: string;
  merchant: string;
  receipts: any[];
  comment?: string;
  category?: string;
  user: User;
  index: number;
};

export type Amount = {
  value: number;
  currency: 'EUR' | 'DKK' | 'GBP';
};

export type User = {
  first: string;
  last: string;
  email: string;
};
