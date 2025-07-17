
import "./style.css";
import React, { useState } from "react";
import axios from 'axios';


const Add_Form =({getData}) =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [alert, setAlert] = useState("");

    const onHandleSubmit = ()=>{
        axios.post('https://687632cc814c0dfa653b18fc.mockapi.io/user',{
            name: name,
            email: email,
            phone: phone

        }).then(()=>{
            setAlert ('Data added')
            setName("");setEmail("");setPhone('')
            getData();
        })
    }
    

    return(<>
    <div className="add_form">
        <h1>Add Data<span>{alert}</span></h1>
        <input type="text" placeholder="name" value={name}
        onChange={(e)=> setName(e.target.value)}/>

        <input type="email" placeholder="email" value={email}
        onChange={(e)=> setEmail(e.target.value)}/>
         
        <input type="text" placeholder="number"  value={phone}
        onChange={(e)=> setPhone(e.target.value)}/>
    

        <button onClick={onHandleSubmit}>Add Item</button>
    </div>
 
    
    </>)
}
export default Add_Form




