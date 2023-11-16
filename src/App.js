// import logo from './logo.svg';
import { useState } from "react";
import ToDoList  from "./ToDoList";
 import { AiFillDelete } from "react-icons/fa";
import "./App.css";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("")
  };
  const deleteItems=(id)=>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !==id;
      });
    });

};

  return (
    <div>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do list</h1>
          <br />
          <input
            type="text"
            placeholder="add a items"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}>+</button>
          <ol>
            {Items.map((itemval,index) => {
             return<ToDoList key={index} id={index}
             text={itemval}
            onSelect={deleteItems}/>   
                     
            })}
             
          </ol>
        </div>
      </div>
    </div>
  );
};

export default App;
