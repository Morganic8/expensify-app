import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})

    expect(state).toEqual([]);
});

test('should remove expense by id', ()=> {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', ()=> {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            note: '',
            createdAt: 0
        }
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, {
        id: expect.any(String),
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }])
});


test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount: 200
        }
    }

    const state = expensesReducer(expenses, action);

    expect(state[1].amount).toBe(200);
});

test('should not edit an expense if not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id + 2,
        updates: {
            amount: 200
        }
       
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});