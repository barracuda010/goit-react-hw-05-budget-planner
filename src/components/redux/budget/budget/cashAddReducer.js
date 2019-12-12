import types from '../../types';

const cashAddReducer = (state = 0, action) => {
  switch (action.type) {
    case types.CASH_ADD:
      return state + action.payload.budget;
    default:
      return state;
  }
};

export default cashAddReducer;
