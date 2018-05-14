
//createStore needs a function, this builds our state for the app
import { createStore } from 'redux';


//Action Generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
     incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count = 1} = {} ) => ({
    type: 'SET',
    count
});

const resetCount = ({count = 1} = {}) => ({
    type: 'RESET',
    count
})


// Reducers
// 1.) Reducers are pure function  - output determined by input
// 2.) Never change state of action - we return the copy of the previous state with new value

const countReducer = (state = { count : 0}, action) => {

    switch(action.type){
        case 'INCREMENT':
        
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        };
        case 'RESET':
        return {
            count: 0
        };
        case 'SET':
        return {
            count: action.count
        }
        default:
        return state;
    }        
}
//must call state as param this is the current state
const store = createStore(countReducer);

store.subscribe( () => {
    //returns state of app
    console.log(store.getState());    
})




//Actions - an object that gets to the store

//increment the count
// store.dispatch(
//     {
//         type: 'INCREMENT',
//         incrementBy: 5

//     }
// );

store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(incrementCount());

//reset the count
store.dispatch(resetCount({count: 0}))


//decrement the count
store.dispatch(decrementCount())

//decrement the count by 10
store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({ count: 101}));
