import { createStore, combineReducers } from  'redux';
import uuid from 'uuid';

//action generator
const addExpense = ( 
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }

});

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//EDIT EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

//Expenses Reducers
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense
        ];
        case 'REMOVE_EXPENSE':
        //take the id from the expense array and compare with the dispatch id
        return state.filter(({ id }) => id !== action.id);

        case 'EDIT_EXPENSE':
        return state.map( (expense)=> {
            if(expense.id === action.id){
                return {
                    ...expense,
                    ...action.updates
                }

            } else {
                return expense
            }
        })
        
        default:
        return state;
    }
}


//******************FILTERS REDUCER*********** */
//SET_TEXT
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
});

//SORTBY AMOUNT

const sortByAmount = (sortByAmount = 'amount') => ({
    type: 'SORT_BY_AMOUNT',
    sortByAmount
});

const sortByDate = (sortByDate = 'date') => ({
    type: 'SORT_BY_DATE',
    sortByDate
})

const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
})

//Filters Reducers
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT':
        return {
            ...state,
            text: action.text
        };
        case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortBy: action.sortByAmount
        };
        case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy: action.sortByDate
        }
        case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.startDate
        }
        case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.endDate
        }
        default:
        return state;
    }
}
 
//GET VISIBLE EXPENSES

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {

    return expenses.filter( (expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort( (a,b)=> {
        if(sortBy === 'date'){
             return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    })
}


//store creation
//combine reducers allows to have multiple reducers

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 200, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000}));
// store.dispatch(addExpense({ description: 'Rent', amount: 2000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id}))


// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-2000));
// // store.dispatch(setStartDate());
// store.dispatch(setEndDate(-1250));

const demoState = {
    expenses: [{
        id: 'dsamk',
        description: 'January Rent',
        note: 'This was the final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

