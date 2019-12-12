import types from '../../types';

const addCash = budget => ({
  type: types.CASH_ADD,
  payload: {
    budget,
  },
});

export default addCash;
