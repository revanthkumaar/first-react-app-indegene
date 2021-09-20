import React from 'react';
import ToDo from '../todo/todo.component'

const ToDoList = ({ toDoList }) => {
  return <div>
      {
          toDoList.map(todo => {
              return (
                  <ToDo todo={todo.task}/>
              )
          })
      }
  </div>;
};

export default ToDoList;