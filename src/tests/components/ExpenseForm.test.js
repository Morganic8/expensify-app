import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid from submission', () => {
    const wrapper = shallow(<ExpenseForm/>);

    expect(wrapper).toMatchSnapshot();

    //we have access to the form element
    //we can test form submisson
    //enzyme shallow rendering using 'simulate' event
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });

    //fetch state from wrapper - can find with enzyme
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm/>);

    
    //access the element .find
    //we have multuple inputs
    //use .at to target index
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('description')).toBe(value);
});

test('should set Note on input change', () => {
    const value = 'A new Note!'
    const wrapper = shallow(<ExpenseForm/>);

    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
    const value = "22.50"
    const wrapper = shallow(<ExpenseForm/>);

    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should NOT set amount if valid input', () => {
    const value = "22.122"
    const wrapper = shallow(<ExpenseForm/>);

    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
});

test('should call onSumbit prop for valid form submission', () => {
    //Mock Function aka Spy
    const onSumbitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSumbitSpy}/>);

    //form submitted
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });

    expect(wrapper.state('error')).toBe(undefined);
    expect(onSumbitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });

});

test('should set new date on date change', () => {
    const now = moment();
    //dont need to pass down data
    const wrapper = shallow(<ExpenseForm/>);

    wrapper.find('SingleDatePicker').prop('onDateChange')(now)

    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm/>);

    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toEqual(true);
});