import React from 'react';
import ExpenseItem from './ExpenseListItem';

import { connect } from 'react-redux';

import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.map( (expense)=> 
            <ExpenseItem key={expense.id} {...expense}/>)
        }
    </div>
);

//Connect Component to store
//First Brackets is what you want from the store
//Second  Brackets is the component you want to connect with

const mapStateToProps = (state) => {
    //must return object
    //anything you return here can be added as a 'prop' above
    return {
         expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);

