import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            }

        case 'DECREMENT':
            return {
                count: state.count - 1
            }

        case 'RESET':
            return {
                count: 0
            }

        case 'SET':
            return {
                count: action.setValue
            }

        default:
            return state;
    }
});

// subscribe to any action calls into reducer 
// also returns a function to unsubscribe at any time
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// prints {count: 1}
store.dispatch({
    type: 'INCREMENT'
});

// NOTE: another member to pass additional data - prints {count: 6}
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

// prints {count: 5}
store.dispatch({
    type: 'DECREMENT'
});

// prints {count: 0}
store.dispatch({
    type: 'RESET'
});

// prints {count: -10}
store.dispatch({
    type: 'SET',
    setValue: -10
});

// subscription is called even if the action isn't defined
// -- returns state unchanged due to 'default' handler in reducer
// -- if no handler then store.getState() returns undefined
store.dispatch({
    type: 'DOES_NOT_EXIST'
});

// prints {count: undefined}
store.dispatch({
    type: 'SET',
    // setValue: -10
});

// unsubsribe from store changes (i.e whenever reducer function is called)
unsubscribe();

// unsubscribe not called so no console.log()
store.dispatch({
    type: 'SET',
    setValue: 100
});