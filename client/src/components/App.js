import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
function App() {
    const [state,setstate]=useState({
        firstname:"",
        username:"",
        email:"",
        password:""
    });

const handlesubmit=(e)=>{
    e.preventDefault();
console.log(state);
const registered ={
    firstname:state.firstname,
    username:state.username,
    email:state.email,
    password:state.password
}
axios.post('http://localhost:5000/signup',registered,{

        "headers": {
        
        "content-type": "application/json",
        
        },
        
        })
        .then((res)=>{
           console.log(res);
        })
        .catch((err)=>{
              console.log(err);
        })



}
const handleChange =(e)=>{

setstate(prev=>({...prev,[e.target.name]:e.target.value}));


}

    return (
        <div>
            <div className='container'>
                <div className='form-div'>
                    <form onSubmit={handlesubmit}>
                           <input type='text'
                           placeholder='Full Name'
                           
                           onChange={handleChange}
                           name='firstname'
                           value={state.firstname}
                           className='form-control form-group'
                           />
                           
                           <input type='text'
                           placeholder='Username'
                           onChange={handleChange}
                           name='username'
                           value={state.username}
                           className='form-control form-group'
                           />
                           <input type='text'
                           placeholder='E-mail'
                           onChange={handleChange}
                           name='email'
                           value={state.email}
                           className='form-control form-group'
                           />
                           <input type='password'
                           placeholder='password'
                           onChange={handleChange}
                           name='password'
                           value={state.password}
                           className='form-control form-group'
                           />
                     <input type='submit' className='btn btn-danger btn-block' value='Submit' />


                    </form>




                </div>


            </div>
        </div>
    )
}

export default App
