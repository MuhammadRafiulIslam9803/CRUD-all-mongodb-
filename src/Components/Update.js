import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const user = useLoaderData()
    const [updatedUser ,setUpdatedUser] = useState(user)
    const handleUpdateSubmitBtn =event =>{
        event.preventDefault()  
        // console.log(updatedUser)
        //ei link hocce backend er jekane dynamic id ace tar link ar 
        // ${user._id} eta holo amra user hisabe data Load korce
        fetch(`http://localhost:5000/users/${user._id}`,{
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body :JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                alert("Modify Or Update this user Successfully")
            }
        })

    }

    const handleUpdateFeild =event =>{
        const value = event.target.value;
        const feildName = event.target.name;
        const updateUser = {...updatedUser}
        updateUser[feildName] = value
        setUpdatedUser(updateUser)
    }
    return (
        <div className='bg-orange-200 w-7/12 p-8 mx-auto mt-3 rounded-lg'>
        <form onSubmit={handleUpdateSubmitBtn}>
            <input className='w-full m-3 p-3 rounded-lg' onChange={handleUpdateFeild} type="text" defaultValue={user.name} name="name" id=""  placeholder='Provide Your Name Here'/>
            <br />
            <input className='w-full m-3 p-3 rounded-lg' onChange={handleUpdateFeild} type="email" defaultValue={user.email} name="email" id="" placeholder='Provide Your Email Here'/>
            <br />
            <input className='w-full m-3 p-3 rounded-lg' onChange={handleUpdateFeild} type="text" defaultValue={user.address} name="address" id="" placeholder='Provide Your Address Here'/>
            <br />
            <input className='w-full m-3 p-3 rounded-lg bg-orange-400' type="submit" value="Submit" />
        </form>
    </div>
    );
};

export default Update;