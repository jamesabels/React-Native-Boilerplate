// Import Redux
import {
    createStore
} from 'redux'; 

// Import Actions
import { Actions } from 'react-native-router-flux';

// Login Reducer 
const login = function(state = {}, action) {
    switch (action.type) {
        case 'LOGIN':
            loginFunction(state);
            break; 
        case 'LOGOUT':
            logoutFunction(state);
            break; 
        case 'REGISTER':
            registerFunction(state);
            break; 
        case 'BACK':
            backFunction(state);
            break; 
        default:
            return state;
    }
}

// Login 
let loginFunction = function (state) {
    Actions.Main();
}

// Logout 
let logoutFunction = function (state) {
    Actions.Login(); 
}

// Register 
let registerFunction = function (state) {
    Actions.pop(); 
}

// Back 
let backFunction = function (state) {
    Actions.pop(); 
}

// Create Store 
let LoginStore = createStore(login);


export default LoginStore;