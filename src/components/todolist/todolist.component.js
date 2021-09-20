import React from 'react';
import ToDo from '../todo/todo.component'

const ToDoList = ({ toDoList }) => {
  return (<div className="todo-list">
      {
          toDoList.map(todo => {
              return (
                  <ToDo key={todo.id} todo={todo.task}/>
              )
          })
      }
  </div>);
};

export default ToDoList;