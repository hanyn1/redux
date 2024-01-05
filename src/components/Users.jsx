import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
export default function Users() {
    const [user,setUser]=useState([])
    const getUser=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log(res)
            setUser(res.data)
        })
        .catch(()=>{
            console.log("err")
        })
    }
  return (
    <div>
        <button onClick={getUser}>Fetch user's names</button>
    {
        user.map((ele)=>(
            <ul class="list-group" key={ele.id}>
  <li class="list-group-item">{ele.name}</li>
 
</ul>
        ))
    }
    </div>
  )
}
