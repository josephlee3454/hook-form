import React, { useState } from 'react';
const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameErr, setfirstnameErr] = useState("")
    const [lastname, setlastname] = useState("");
    const [lastnameErr, setlastnameErr] = useState("");
    const [email, setEmail] = useState("");
    const [emailErr, setemailErr] = useState("")
    const [password, setpassword]= useState("");
    const [passwordErr, setpasswordErr] = useState("");
    const [confirm, setconfirm] = useState("");
    const [confirmErr, setconfirmErr] = useState("");



const firstnameHandler= (e)=> {
    setFirstname(e.target.value);
    if (e.target.value.length < 2) 
    {
        setfirstnameErr("first name needs to be at least two chracters")   
    }
    else{
        setfirstnameErr(""); 
    }
    
}

const lastnameHandler= (e)=> {
    setlastname(e.target.value);
    if (e.target.value.length < 2) 
    {
        setlastnameErr("first name needs to be at least two chracters")   
    }
    else{
        setlastnameErr(""); 
    }
    
}

const emailHandler= (e)=> {
    setEmail(e.target.value);
    if (e.target.value.length < 2) 
    {
        setemailErr("first name needs to be at least two chracters")   
    }
    else{
        setemailErr(""); 
    }
    
}

const passwordHandler = (e)=> {
    setpassword(e.target.value);
    if (e.target.value.length < 2) 
    {
        setpasswordErr("first name needs to be at least two chracters")   
    }
    else{
        setpasswordErr(""); 
    }
    
}
const confirmHandler = (e)=> {
    setconfirm(e.target.value);
    if (e.target.value.length < 2) 
    {
        setconfirmErr("first name needs to be at least two chracters")   
    }
    else{
        setconfirmErr(""); 
    }
    
}
    
const createUser = (e) => {
    e.preventDefault();
    const newUser = {firstname, lastname, email, password, confirm };


 }
return(
    <>
    <form onSubmit={createUser}>
        <div>
            <label htmlFor= "firstname"> First Name:</label>
            <input onChange ={ firstnameHandler } type="text" name="firstname"/>
            {
                firstnameErr ?
                <p>{firstnameErr}</p>:''
            }
        </div>
        <div>
            <label htmlfor="lastname"> Last Name:</label>
            <input onChange ={ lastnameHandler } type="text" name="lastname" />
            {
                lastnameErr ?
                <p>{lastnameErr}</p>:''
            }
        </div>
        <div>
            <label htmlfor = "email"> Email:</label>
            <input onChange ={ emailHandler } type="email" name="email" />
            {
                emailErr ?
                <p>{emailErr}</p>:''
            }
        </div>
        <div>
            <label htmlfor="password"> Password: </label>
            <input onChange ={ passwordHandler } type="text" name=" password" />
            {
                passwordErr ?
                <p>{passwordErr}</p>:''
            }
        </div>
        <div>
            <label htmlfor="confirmPass"> ConfrimPass:</label>
            <input onChange ={ confirmHandler } type="text" name="confrim" />
            {
                confirmErr ?
                <p>{confirmErr}</p>:''
            }
        </div>
        
        <input type="submit"/>
    </form>
    <div>
            <p>Form Data</p>
            <p>Full Name: {firstname} {lastname}</p>
            <p>Email: {email}</p>
        </div>

    </>
);

};
export default Form;
