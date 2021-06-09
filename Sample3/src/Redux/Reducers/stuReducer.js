const stuState={
    // 
    stuIt:'IT16008',
    name:'Akash',
    dept:'Information Technology',
    email:'demo@gmsil.com'
}

const stuReducer=(state={stuState}, action)=>{
//    console.log("from stu reducer the action is ",action)
    
   switch(action.type){
       case 'UPDATE_STU_MAIL_ID':
           state={
               ...state,
               email:action.payload
           }
           return state
           break
       case 'SET_STU_NAME':
           state={
               ...state,
               name:action.payload
           }
           return state
           break
        case 'SET_NEW_STU_USER':
            state={
                ...state,
                name:action.payload
            }
            return state
            break
        default:
            return state
   }
}
export default stuReducer