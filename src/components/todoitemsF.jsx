import React from "react";

const DeleteBtnHandler = () => {
  return alert("Anda akan menghapus todo");
};

const ButtonHandler = (input) => {
  return alert(`Anda akan menghapus ${input}`);
};

const TodoItem = (props) => {
  return (
    <div className="my-1 d-flex flex-row justify-content-between todo-item-container align-items-center">
      {props.toDoData.activity} ID: {props.toDoData.id}
      <div>
        <button onClick={DeleteBtnHandler} className="btn btn-danger">
          Delete
        </button>
        <button
          onClick={() => ButtonHandler("Makan")}
          className="btn btn-success"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
