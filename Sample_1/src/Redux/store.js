// Data hoga

import {createStore,combineReducers,applyMiddleware} from 'redux'
import userReducer from './Reducers/userReducer'
import stuReducer from './Reducers/stuReducer'
// import {combineReducers} from 'redux'
// middelware

// const rootReducer= combineReducers(userReducer,stuReducer)
const rootReducer = combineReducers({
    // userReducer,
    // stuReducer
    // 
    // WE will use as like this
    // 
    user:userReducer,
    student:stuReducer
})


const store= createStore(rootReducer)

export default store
