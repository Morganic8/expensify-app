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

import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './firebase/firebase';





const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then( () => {
    ReactDOM.render(jsx, document.getElementById('app'));
})


