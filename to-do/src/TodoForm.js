import React from 'react';

const NewTodoForm = (props) => {
  return (
    <form onSubmit={props.formSubmitted}>
      <label htmlFor="newTodo">New</label>
      <input onChange={props.newTodoChanged} id="newTodo" name="newTodo" value={props.newTodo} />
      <button type="submit">Add</button>
    </form>
  )
};

export default NewTodoForm;
