import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Read = () => {
    const users = useLoaderData()
    const [displayUser , setDisplayUser] =useState(users)
    const handleDeleteUser =(user)=>{
      const agree = window.confirm(`Are you Want to Delete : ${user.name}`)
      if (agree){
        console.log(` ace :${user._id}`)
        fetch(`http://localhost:5000/users/${user._id}` ,{
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.deletedCount > 0){
                    alert('user delete successfully')
                    const remainingUser= displayUser.filter(disUser => disUser._id !== user._id);
                    setDisplayUser(remainingUser)   
                 }
        
        })
      }
    }
    return (
        <div>
            {
                displayUser.map(user => <div className=' bg-yellow-300 rounded-lg m-4 p-5' key={user._id}>
                    <h3>{user.name}</h3>
                    <h3>{user.address}</h3>
                    <h3>{user.email}</h3>
                    <Link to={`/update/${user._id}`}><button className='bg-yellow-600 p-2 m-2 rounded-lg px-5 text-2xl'>Update</button></Link>
                    <button onClick={()=>handleDeleteUser(user)} className='bg-yellow-600 p-2 m-2 rounded-lg px-5 text-2xl'>Delete</button>
                </div> )
            }
        </div>
    );
};

export default Read;