import types from '../../types';

export const removeExpense = deleteId => ({
  type: types.EXPENSE_REMOVE,
  payload: {
    deleteId,
  },
});

export const expenseCash = expense => ({
  type: types.CASH_EXPENSE,
  payload: {
    expense,
  },
});
