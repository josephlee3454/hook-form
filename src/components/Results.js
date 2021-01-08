import React, { useState } from 'react';

const Results = (props) => {
    const {firstname, lastname, email, password} = props.data;
    return(
        <div>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>password: password</p>
            <p>confirm: password</p>

        </div>
    );
}
export default Results