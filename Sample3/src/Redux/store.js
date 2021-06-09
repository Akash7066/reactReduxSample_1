// Data hoga

import {createStore,combineReducers,applyMiddleware} from 'redux'
import userReducer from './Reducers/userReducer'
import stuReducer from './Reducers/stuReducer'
// import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// dev tool
import {composeWithDevTools} from 'redux-devtools-extension'

// common data
const stuState={
    // 
   
}

const userState={
    // inital state
  

}

const commonData={
    user:{
        userId:'UI9898',
        name:'Ram Sing',
        depatment:['IT','TECH']
    },
    student:{
        stuIt:'IT16008',
        name:'Akash',
        dept:'Information Technology',
        email:'demo@gmsil.com'
    }
}

// 
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


// const store= createStore(rootReducer,commonData,applyMiddleware(logger,thunk))
const store= createStore(rootReducer,commonData,composeWithDevTools(applyMiddleware(thunk)))

export default store
