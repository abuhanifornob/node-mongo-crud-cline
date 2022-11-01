import React, { useState } from 'react';

const AddUser = () => {
    const [user,setUser]=useState({})
    const handleAddUser=(event)=>{
        event.preventDefault();
  
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                alert("Data Update Success");
                event.target.reset();

            }
            
            
            
        })


    }
    const handleIhputFile=(event)=>{
        const field=event.target.name;
        const value=event.target.value;
        const newUser={...user};
        newUser[field]=value;
        setUser(newUser);
      
        
    }
    return (
        <div>
            <h3>Please add a New User: </h3>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleIhputFile} type="text" name="name" id="" placeholder='Please Enter Your Name' required />
                <br />
                <input onBlur={handleIhputFile} type="email" name="email" id="" placeholder='Please Enter Your Email' required />
                <br />
                <input onBlur={handleIhputFile} type="text" name="address" id="" placeholder='Please Enter Your address' required />
                <br />
                <button type="submit">Add New User</button>
            </form>
        </div>
    );
};

export default AddUser;