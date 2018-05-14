//install -> import -> use

//NPM modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//component dependencies
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
//Must add the css to AirBNB date picker
import 'react-dates/lib/css/_datepicker.css';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';




const store = configureStore();


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})

store.dispatch(addExpense({ description: 'Water Bill', amount: 5000, createdAt:35000}));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 2000, createdAt:15000}));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt:35000}));


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'));
