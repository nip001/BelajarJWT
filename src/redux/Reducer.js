import {combineReducers} from 'redux';

const initialDataUser={
    token:"",
}

function UserReducer(state= initialDataUser, action) {
    if(action.type=="SET_USER"){
        return({
            ...state,
            [action.inputType]:action.inputValue
        })
    }
    return state
}

const Reducer=combineReducers({
    UserReducer,
})

export default Reducer