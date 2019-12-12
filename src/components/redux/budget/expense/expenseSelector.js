// import { createSelector } from 'reselect';

export const getBudget = store => store.budget;
export const getExpense = store => store.expense;

export const calculateTotalExpenses = store => {
  const totalExpense = getExpense(store);
  const sum = totalExpense.reduce((acc, el) => acc + el.amount, 0);
  return sum;
};

export const calculateBalance = store =>
  getBudget(store) - calculateTotalExpenses(store);
