import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    if (action.type === 'INCREMENT') {
        return {
            count: state.count + 1
        }
    } else {
        return state;
    }
});

console.log(store.getState()); // prints {count: 0}

// Action is just an object that gets sent to the store (via store.dispatch())
// so the store can decide if & how to modify the state based on the information contained
// in that object

const action = {
    type: 'INCREMENT'
};

store.dispatch(action);

console.log(store.getState()); // prints {count: 1}

store.dispatch(action);
store.dispatch(action);

console.log(store.getState()); // prints {count: 3}
