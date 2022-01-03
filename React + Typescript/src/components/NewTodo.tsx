import React from "react";

const NewTodo = ()  => {
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>
            <input type="text" name="" id="" />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;