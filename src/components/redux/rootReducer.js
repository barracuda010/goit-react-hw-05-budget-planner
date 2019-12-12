import { combineReducers } from 'redux';
import cashAddReducer from './budget/budget/cashAddReducer';
import cashExpenseReducer from './budget/expense/expenseReducer';

const rootReducer = combineReducers({
  budget: cashAddReducer,
  expense: cashExpenseReducer,
});
export default rootReducer;
