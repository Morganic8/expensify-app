import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';


test('should render Expense summary with expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenses={expenses}/>)

    expect(wrapper).toMatchSnapshot();
});

test('should render Expense summary without expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[]}/>)

    expect(wrapper).toMatchSnapshot();
});
