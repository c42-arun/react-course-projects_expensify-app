import { createStore } from 'redux';

const state = createStore((state = { count: 0 }) => {
    return state;
});

console.log(state.getState());