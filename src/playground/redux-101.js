import { createStore } from 'redux';

// Action generators: functions that return action objects

// notice obj de-structuring/default value in param
// also param itself has a default of empty object
const incrementCount = ({ incrementBy = 1 } = {}) => ({ 
    type: 'INCREMENT',
    incrementBy//: incrementBy - if property-name equals variable name then simply omit property name
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

// no payload required
const resetCount = () => ({
    type: 'RESET'
});

// required payload, so no defaults
// will thror type error if no payload is passed
const setCount = ({ count }) => ({
    type: 'SET',
    count
});

// Reducers 
// 1. Are pure functions
// 2. Never change state nor action
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // NO LONGER NEED THIS CHECK IN HERE - MOVED TO incrementCount() action generator
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            }

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }

        case 'RESET':
            return {
                count: 0
            }

        case 'SET':
            return {
                count: action.count
            }

        default:
            return state;
    }
};

const store = createStore(countReducer);

// subscribe to any action calls into reducer 
// also returns a function to unsubscribe at any time
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// prints {count: 1}
store.dispatch(incrementCount());

// NOTE: another member to pass additional data - prints {count: 6}
store.dispatch(incrementCount({ incrementBy: 5}));

// prints {count: 5}
store.dispatch(decrementCount());

// prints {count: 0}
store.dispatch(resetCount());

// prints {count: -10}
store.dispatch(setCount({ count: 10 }));

// subscription is called even if the action isn't defined
// -- returns state unchanged due to 'default' handler in reducer
// -- if no handler then store.getState() returns undefined
store.dispatch({
    type: 'DOES_NOT_EXIST'
});

// throws exception in setCount() action generator
// when it tries to de-structure off an undefined param
store.dispatch(setCount());

// unsubsribe from store changes (i.e whenever reducer function is called)
unsubscribe();

// unsubscribe not called so no console.log()
store.dispatch(setCount({ count: 100 }));