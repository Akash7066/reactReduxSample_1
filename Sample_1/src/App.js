import React,{useState,useEffect} from 'react'
import './App.css'
// action
import {updateName,addUser,updateEmail,updateStuName} from './Redux/action'

// Store ya redux use krne ke le hme redux ko connect krna padega
import {connect} from 'react-redux'


// 
function App(props){
  console.log('from app ',props)
  const [count,setCount] = useState(0)
  useEffect(()=>{
    props.changeName('New user Name AKash ',count)
  },[count])
// 
const updateUserName=()=>{
  props.newUser('NEw USer shubham')
}

//student 
const update_name=()=>{
  props.changeStuName('Nick')
}
const update_email=()=>{
  props.changeEmail('Nick@nick.com')
}
  return(<div>
    <div className="App">
        <button onClick={()=>setCount(prev=>prev+1)}>Add count {count}</button>
        <button onClick={updateUserName}>Add New user</button>
   
      <p>Name is {props.user.name}</p>
      {/* <p>Student name is {props.student.stuState.name} & the email is {props.student.stuState.email}</p> */}
      {/*  */}
      <p>Student name is {props.student.name} & the email is {props.student.email}</p>

    {/* for student  */}
    <button onClick={update_name}>change stu name</button>
        <button onClick={update_email}>change email name</button>
   
    
    </div>
  </div>)
}

const mapStateToProps = (state)=>{
  console.log('map state to props ',state)  
  return{
    // when we use single reducer
    //  user:state
    // when we use two or more reducer
    user:state.user,
    student:state.student
  }
}
const mapDispatchToProps = (dispatch)=>{
  // this function is used pass value or update values
  return{
    // 
    // func :(par)=>{dispatch(type:'',payload:par')}
    // changeName:(name)=>{ dispatch({type:'SET_NAME', payload:name}) },
    // newUser:(name)=>{dispatch({type:'SET_NEW_USER',payload:name})}
    //after actions
    changeName:(name)=>{ dispatch(updateName(name)) },
    newUser:(name)=>{dispatch(addUser(name))},
    changeStuName:(name)=>{dispatch(updateStuName(name))},
    changeEmail:(email)=>{dispatch(updateEmail(email))}
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(App)
