import React, { useState } from 'react';
const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [firstnameErr, seFirstnameErr] = 
const createUser = (e) => {
    const{input, setInputs} = props;
    setInputs({
        ...input ,
        [e.target.name]: e.target.value
    });
};
const validator = ()=>{
    if(firstname
}

return(
    
    <form onChange ={ createUser }>
        <div>
            <label htmlFor= "firstname"> First Name:</label>
            <input onChange ={ createUser } type="text" name="firstname" onChange={(e)=> setFirstname(e.target.value)}/>
        </div>
        <div>
            <label htmlfor="lastname"> Last Name:</label>
            <input onChange ={ createUser } type="text" name="lastname" onChange={(e)=> setLastname(e.target.value)}/>
        </div>
        <div>
            <label htmlfor = "email"> Email:</label>
            <input onChange ={ createUser } type="text" name="email" onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlfor="password"> Password: </label>
            <input onChange ={ createUser } type="text" name=" paswword" onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <div>
            <label htmlfor="confirmPass"> ConfrimPass:</label>
            <input onChange ={ createUser } type="text" name="confrimPass" onChange={(e)=> setConfirmPass(e.target.value)}/>
        </div>
        
    </form>

);

};
export default Form;
