import e from 'cors';
import React from 'react';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialValues = {
    name:'',
    age:'',
    email:'',
}


const AddFriendForm = () => {
    const {push} = useHistory();
    const [value, setValue] = useState(initialValues);
    const onChange = (e) => {
        setValue({...value,[e.target.name]:e.target.value})
    }

const handleSubmit = (evt) =>{
    const newFriend = {...value}
    evt.preventDefault();
    console.log(value)
    axiosWithAuth()
    .post('http://localhost:5000/api/friends',newFriend)
    .then((res)=>{
        console.log(res);
        push('/friendlist')
    })
    .catch((err)=>{
        console.log(err);
    })
    
}

    return (
        <>
        <h2>Add your friends below!</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>
                <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={onChange}
                value = {value.name}

                />
            </label>
            <br/>
            <label htmlFor='age'>
                <input
                type="number"
                name="age"
                placeholder="Age"
                onChange={onChange}
                value = {value.age}
                />
            </label>
            <br/>
            <label htmlFor='email'>
                <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={onChange}
                value = {value.email}
                />
            </label>
            <br/>
            <button>Submit Friend</button>
        </form>
        </>
    )
}
export default AddFriendForm;