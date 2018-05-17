import React from 'react';
import moment from 'moment';

export default (expenses) => {
    
    const reducer = (total, current) => total + current.amount;
    return expenses.reduce(reducer, 0); 
    
}