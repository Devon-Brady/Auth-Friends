import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom"
// import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import FriendForm from "./addFriendForm";
const List = [{
    name:"",
    age:"",
    email:"",
}]
const FriendList = () => {
    const [list,setList] = useState(List)
    const {push} = useHistory();
    useEffect(() =>{
        axiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then(res => {
            setList(res.data)
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    const pushToAddFriend = () => {
        push("/addfriend")
    }
    const LogOutButton = () => {
        localStorage.removeItem("token");
        push("/");
    }
  return (
    <>
    <button onClick={LogOutButton}>Log Out</button>
      <h2>Your Friends!</h2>
      {list.map((friend) => {
        return (
          <div>
            <p>Name:{friend.name}</p>
            <p>Age:{friend.age}</p>
            <p>Email:{friend.email}</p>
            <br />
          </div>
        );
      })}
      <button onClick={pushToAddFriend}> Add Friend!</button>
    </>
  );
};
export default FriendList;
