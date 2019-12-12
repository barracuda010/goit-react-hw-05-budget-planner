import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import Form from './shared/Form';
import { expenseCash } from './redux/budget/expense/expenseAction';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';

const labelStyles = `
  margin-bottom: 16px;
`;

class ExpenseForm extends Component {
  static propTypes = {
    onSave: PropTypes.func,
  }.isRequired;

  state = {
    name: '',
    amount: 0,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSave } = this.props;
    const { name, amount } = this.state;
    onSave({ name, amount: +amount, id: shortid.generate() });
    this.setState({ name: '', amount: 0 });
  };

  render() {
    const { name, amount } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSave: budget => dispatch(expenseCash(budget)),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
