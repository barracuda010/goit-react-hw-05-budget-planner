import types from '../../types';

const removeExpenseReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.EXPENSE_REMOVE:
      return state.filter(el => el.id !== payload.deleteId);

    case types.CASH_EXPENSE:
      return [...state, payload.expense];
    default:
      return state;
  }
};
export default removeExpenseReducer;
