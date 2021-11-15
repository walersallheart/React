import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from './AddUser.module.css'
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = event => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }

        if (Number(enteredAge) < 1) {
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);

        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    }

    return (
        <div>
            <ErrorModal title="An Error Occurred" message="Something went wrong" />
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" value={enteredUsername} onChange={usernameChangeHandler} />

                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" name="age" id="age" value={enteredAge} onChange={ageChangeHandler} />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;