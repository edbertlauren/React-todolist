import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar react dengan zorro"
    },
    {
      text: "Belajar 2"
    },
    {
      text: "Belajar 3"
    },
    {
      text: "Belajar 4"
    },
    {
      text: "Belajar 5"
    },
    {
      text: "Belajar 6"
    },
    {
      text: "Belajar 7"
    },
    {
      text: "Belajar 8"
    },
    {
      text: "Belajar 9"
    }
  ];
  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
