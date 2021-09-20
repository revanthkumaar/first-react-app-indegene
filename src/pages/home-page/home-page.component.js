import React, {useState} from 'react';
import './home-page.component.css'
import Directory from "../../components/directory/directory.component.jsx";
import Header from "../../components/header/header.component";
import data from '../../data.json'
import ToDoList from "../../components/todolist/todolist.component";
import ToDoForm from '../../components/todoForm/todoForm';

const HomePage = () => {
  const [toDoList, setToDoList] = useState(data);

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, {id: toDoList.length+1, task: userInput, complete:false}];
    setToDoList(copy)
  }

    return (
      <div className="home-page">
        <Header />
        <Directory />
        <ToDoList toDoList={toDoList} />
        <ToDoForm addTask={addTask} />
      </div>
    );
}

export default HomePage;

