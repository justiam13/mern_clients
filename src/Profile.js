// Profile.js
import React, { useState, useContext } from "react";
import { FormContext } from "./FormContext";
function Profile() {
    const { currentUser, changePassword } = useContext(FormContext);
    const [newPassword, setNewPassword] = useState("");

    const handleChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        changePassword(currentUser.email, newPassword);
        setNewPassword("");
    };

    return (
        <div>
            <h2>Profile</h2>
            <p>Name: {currentUser.name}</p>
            <p>Age: {currentUser.age}</p>
            <p>Email: {currentUser.email}</p>
            <form onSubmit={handleSubmit}>
                <input value={newPassword} onChange={handleChange} type="password" placeholder="New Password" required />
                <button type="submit">Change Password</button>
            </form>
        </div>
    );
}

export default Profile;
