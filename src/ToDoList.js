import React from "react";
// import { AiFillDelete } from "react-icons/fa";

const ToDoList = (props) => {
  return (
    <div>
      <div className="todo_style">
      
      <i
          className="fa fa-times"
          // aria-hidden="true"
          
          onClick={() => {
            props.onSelect(props.id);
          
          }}
        />

        <li>{props.text}</li>
      </div>
    </div>
  );
};
export default ToDoList;

// <i
//           className="fa fa-times"
//           aria-hidden="true"
//           onClick={() => {
//             props.onSelect(props.id);
//           }}
