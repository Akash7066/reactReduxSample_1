export const updateName=(name)=>{
    return{
        type:'SET_NAME',
         payload:name
        }
}

export const addUser=(name)=>{
    return{
        type:'SET_NEW_USER',
        payload:name
    }
}

//student
export const updateStuName=(name)=>{
    return{
        type:'SET_STU_NAME',
        payload:name
    }
} 

export const updateEmail=(email_add)=>{
    return{
        type:'UPDATE_STU_MAIL_ID',
        payload:email_add
    }
}