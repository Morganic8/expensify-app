import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';


export const ExpenseSummary = (props) =>(
    
    <div>
        <p>
            Viewing {props.expenses.length} 
            {props.expenses.length == 1 ? " expense " : " expenses "}
            that total to {numeral(props.expensesTotal / 100).format('$0,0.00')}
        </p>
    </div>
)

const mapStateToProps = (state, filters) => {
    return {
        expenses : selectExpenses(state.expenses, state.filters),
        expensesTotal: selectExpensesTotal(state.expenses, state.filters)
    }
}
export default connect(mapStateToProps)(ExpenseSummary);