/// Define Type 
const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const LOGOUT = 'LOGOUT'; 
const BACK = 'BACK'; 

export default LoginActions = {};

// LOGIN 
LoginActions.Login = function () {
    return {
        type: LOGIN
    }; 
}

// REGISTER
LoginActions.Register = function () {
    return {
        type: REGISTER
    }; 
}

// LOGOUT
LoginActions.Logout = function () {
    return {
        type: LOGOUT
    }; 
}

// BACK 
LoginActions.Back = function () {
    return {
        type: BACK
    };
}