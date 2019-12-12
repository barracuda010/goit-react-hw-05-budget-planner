import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BudgetForm from './BudgetForm';
import ExpenseForm from './ExpenseForm';
import ExpensesTable from './ExpensesTable';
import Values from './Values';
import { getExpense } from './redux/budget/expense/expenseSelector';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = ({ expenses }) => {
  return (
    <Container>
      <BudgetForm />
      <Values />
      <ExpenseForm />
      {expenses.length > 0 && <ExpensesTable />}
    </Container>
  );
};

const mapStateToProps = store => ({
  expenses: getExpense(store),
});
export default connect(mapStateToProps)(App);

App.propTypes = {
  expenses: PropTypes.shape({}),
}.isRequired;
