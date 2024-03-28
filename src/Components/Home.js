import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const [user ,setUser] =useState({})
    const handleSubmitBtn = event =>{
        event.preventDefault()
        // console.log( user)

        fetch('http://localhost:5000/users',{
            method : 'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        event.target.reset()

    }
    const handleInputFeild = event =>{
        const value = event.target.value;
        const feildName = event.target.name;
        const newUser = {...user};
        newUser[feildName] =value;

        setUser(newUser)
        // toast.success('Successfully toasted!')


    }
    return (
        <div className='bg-orange-200 w-7/12 p-8 mx-auto mt-3 rounded-lg'>
            <form onSubmit={handleSubmitBtn}>
                <input className='w-full m-3 p-3 rounded-lg' onBlur={handleInputFeild} type="text" name="name" id=""  placeholder='Provide Your Name Here'/>
                <br />
                <input className='w-full m-3 p-3 rounded-lg' onBlur={handleInputFeild} type="email" name="email" id="" placeholder='Provide Your Email Here'/>
                <br />
                <input className='w-full m-3 p-3 rounded-lg' onBlur={handleInputFeild} type="text" name="address" id="" placeholder='Provide Your Address Here'/>
                <br />
                <input className='w-full m-3 p-3 rounded-lg bg-orange-400' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Home;