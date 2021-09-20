import React, {useState} from 'react';
import './home-page.component.css'
import Directory from "../../components/directory/directory.component.jsx";
import Header from "../../components/header/header.component";
import data from '../../data.json'
import ToDoList from "../../components/todolist/todolist.component";

const HomePage = () => {
  const [toDoList, setToDoList] = useState(data);

    return (
      <div className="home-page">
        <Header />
        <Directory />
        <ToDoList toDoList={data}/>
      </div>
    );
}

export default HomePage;

