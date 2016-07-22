/// Define Type 
const DEINCRIMENT = 'DEINCREMENT';
const INCRIMENT = 'INCREMENT';

export default TestActions = {};

// LOGIN action 
TestActions.login = function () {
    return {
        type: 'LOGIN'
    }; 
}

// INCREMENT
TestActions.increment = function () {
    return {
        type: 'INCREMENT'
    }; 
}

// DEINCREMENT
TestActions.deincrement = function () {
    return {
        type: 'DEINCREMENT'
    }; 
}