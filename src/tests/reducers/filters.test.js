import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {

    //filters reducer expects state and filters
    //since we are testing defaults, state can be undefined
    //@@INIT is the first action dispatched by redux automatically
    const state = filtersReducer(undefined, { type: '@@INIT'})

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')

    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});

    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };

    const action = { type: 'SORT_BY_DATE'};

    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');
});

test('should set text filter', ()=> {

    const currentState = {
        text: 'temp',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const state = filtersReducer(currentState, {type: 'SET_TEXT', text: 'newTemp'});

    expect(state.text).toBe('newTemp');

});

test('should set startDate', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: 1000});

    expect(state.startDate).toBe(1000);
});

test('should set endDate', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: 1000});

    expect(state.endDate).toBe(1000);
});