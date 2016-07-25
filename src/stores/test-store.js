import {
    createStore
} from 'redux'; 


// Counter Reducer 
const counter = function(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DEINCREMENT':
            return state - 1
        default:
            return state;
    }
}

let TestStore = createStore(counter);


export default TestStore;