import uuid from 'uuid';
import database from '../firebase/firebase';
//component calls action generator
//action generator returns object
//component dispatches object
//redux store changes



//ASYNC
//component calls action generator
//action generator returns function
//component dispatches function (?)
//function runs (has the ability to dispatch other actions and do whatever it wants)


//action generator
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense

});

export const startAddExpense = (expenseData = {}) => {
    //thunk allows us to return a function and access dispatch
    return (dispatch) => {
        //defaults
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        }   = expenseData;

        //object to be used with "PUSH"
        const expense = {description, note, amount, createdAt};

        //send to firebase****
        //for the "THEN" call - for success cases "PUSH" allows us to access the "ref" value
       return database.ref('expenses').push(expense).then( (ref)=> {
            //update redux store****
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
};

export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//EDIT EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
