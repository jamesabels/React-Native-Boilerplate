// Import consts
import { INCRIMENT,  DEINCRIMENT } from '../actions/test_actions'

// Counter Reducer 
export default testReducer = function(state = 0, action) { 
    switch (action.type) {
        case INCRIMENT:
            return state + 1
        case DEINCRIMENT:
            return  state - 1
        default:
            return state;
    }
}