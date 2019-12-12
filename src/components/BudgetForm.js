import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addCash from './redux/budget/budget/cashAddAction';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';

const labelStyles = `
  margin-bottom: 16px;
`;

class BudgetForm extends Component {
  static propTypes = {
    onSave: PropTypes.func,
  }.isRequired;

  state = {
    budget: 0,
  };

  handleChange = e => {
    this.setState({
      budget: +e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSave } = this.props;
    const { budget } = this.state;
    onSave(budget);
    this.setState({ budget: 0 });
  };

  render() {
    const { budget } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input type="number" value={budget} onChange={this.handleChange} />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSave: budget => dispatch(addCash(budget)),
});

export default connect(null, mapDispatchToProps)(BudgetForm);
