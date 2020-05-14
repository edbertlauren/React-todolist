import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handelFormSubmit = e => {
    e.preventDefault();

    if (!value) {
      alert("Form is required!");
      return;
    }

    addTodo(value);
    alert(value);
    setValue("");
  };

  return (
    <section className="add">
      <form className="add-form" onSubmit={handelFormSubmit}>
        <input
          type="text"
          className="add-input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className="add-btn main-black-color">Add</button>
      </form>
    </section>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;
