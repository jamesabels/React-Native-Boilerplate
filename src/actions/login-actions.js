/// Define Type 
const LOGIN = 'LOGIN';
const DEINCRIMENT = 'DEINCREMENT';
const INCRIMENT = 'INCREMENT';

// LOGIN action 
export function login () {
    return {
        type: 'LOGIN'
    }; 
}

// INCREMENT
export function increment() {
    return {
        type: 'INCREMENT'
    }; 
}

// DEINCREMENT
export function deincrement() {
    return {
        type: 'DEINCREMENT'
    }; 
}