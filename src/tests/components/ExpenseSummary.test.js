import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';


test('should render Expense summary with expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/>)

    expect(wrapper).toMatchSnapshot();
});

test('should render Expense summary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={23642363265}/>)

    expect(wrapper).toMatchSnapshot();
});
