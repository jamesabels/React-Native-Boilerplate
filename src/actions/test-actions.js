/// Define Type 
const DEINCRIMENT = 'DEINCREMENT';
const INCRIMENT = 'INCREMENT';

export default TestActions = {};

// INCREMENT
TestActions.Increment = function () {
    return {
        type: INCRIMENT
    }; 
}

// DEINCREMENT
TestActions.Deincrement = function () {
    return {
        type: DEINCRIMENT
    }; 
}