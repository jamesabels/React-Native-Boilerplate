/// Define Type 
export const DEINCRIMENT = 'DEINCREMENT';
export const INCRIMENT = 'INCREMENT';

export default TestActions = {};

// INCREMENT
TestActions.UP = function () {
    return {
        type: INCRIMENT
    }; 
}

// DEINCREMENT
TestActions.DOWN = function () {
    return {
        type: DEINCRIMENT
    }; 
}