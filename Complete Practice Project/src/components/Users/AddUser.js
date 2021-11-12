import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from './AddUser.module.css'

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = event => {
        event.preventDefault();
    }

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" onChange={usernameChangeHandler} />

                <label htmlFor="age">Age (Years)</label>
                <input type="number" name="age" id="age" onChange={ageChangeHandler} />

                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;