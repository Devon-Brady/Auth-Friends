import React, {useState} from "react";
import axios from 'axios';
import e from "cors";
import {useHistory} from 'react-router-dom';
const initialState = {
    username: "",
    password: "",
}
const LoginForm = () => {
    const {push} = useHistory();
    const [ values, setValues ] = useState(initialState)
    const handleChanges = (evt) => {
        setValues({...values,[evt.target.name]: evt.target.value})
        console.log(values);
    }
    const handleSubmint =  (e) => {
        e.preventDefault();
        // console.log('this is values',values);
        axios.post('http://localhost:5000/api/login',values)
        .then((res)=>{
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            push('/friendlist')
        })
        .catch((err)=>{
            console.log(err);
        })

    }
    return(
        <>
        <h2>Login Below</h2>
        <form onSubmit ={handleSubmint}>
            <label htmlFor="username">
                <input 
                type="text" 
                name="username" 
                value={values.username} 
                onChange={handleChanges}
                placeholder='Username'
                />
            </label>
            <br/>
            <label htmlFor="password">
                <input 
                type="password"
                 name="password" 
                 value={values.password} 
                 onChange={handleChanges}
                 placeholder="password"
                />
            </label>
            <br/>
            <button>Login</button>
        </form>
        </>
    )
}
export default LoginForm;