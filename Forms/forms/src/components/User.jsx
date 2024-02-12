import React, { useState } from 'react';

const User = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState('First name is required!');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleFirstName = (e) => {
        if (e.target.value.length < 2) {
            setFirstNameError("First name should be at least 2 characters!");
        } else {
            setFirstNameError("");
        }
        setFirstName(e.target.value);
    };

    const handleLastName = (e) => {
        if (e.target.value.length < 2) {
            setLastNameError("Last name should be at least 2 characters!");
        } else {
            setLastNameError("");
        }
        setLastName(e.target.value);
    };

    const handleEmail = (e) => {
        if (e.target.value.length < 5) {
            setEmailError("The field must be at least 5 characters.");
        } else {
            setEmailError("");
        }
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("The password must be at least 8 characters.");
        } else {
            setPasswordError("");
        }
    };
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
            setPasswordError("The passwords do not match.");
        } else {
            setPasswordError("");
        }
    };
    return (
        <>
            <div>User</div>
            <form>
                <div>
                    <label htmlFor="fName">First Name : </label>
                    <input type="text" name="fName" onChange={handleFirstName} />
                    {firstNameError && <p>{firstNameError}</p>}
                </div>
                <div>
                    <label htmlFor="lName">Last Name : </label>
                    <input type="text" name="lName" onChange={handleLastName} />
                    {lastNameError && <p>{lastNameError}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="text" name="email" onChange={handleEmail} />
                    {emailError && <p>{emailError}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange={handlePassword} />
                    {passwordError && <p>{passwordError}</p>}
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="password" name="confirmPassword" onChange={handleConfirmPassword} />
                    {passwordError && <p>{passwordError}</p>}
                </div>
            </form>
            <div>
                <p>First Name : {firstName}</p>
                <p>Last Name : {lastName}</p>
                <p>Email : {email}</p>
                <p>Password : {password}</p>
                <p>Confirm Password : {confirmPassword}</p>
            </div>
        </>
    );
};
export default User;
