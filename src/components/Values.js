import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  calculateBalance,
  getBudget,
  calculateTotalExpenses,
} from './redux/budget/expense/expenseSelector';
import Value from './Value';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expenses, balance }) => (
  <Container>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={expenses} />
    <Value label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

const mapStateToProps = store => ({
  budget: getBudget(store),
  expenses: calculateTotalExpenses(store),
  balance: calculateBalance(store),
});

Values.propTypes = {
  budget: PropTypes.number,
  expenses: PropTypes.number,
  balance: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Values);
