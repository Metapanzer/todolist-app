import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import TodoItem from "./components/todoitem";
import Axios from "axios";
// import TodoItem from "./components/todoitemsF";

class App extends React.Component {
  state = {
    todoList: [],
    inputTodo: "",
  };

  fetchTodo = () => {
    Axios.get("http://localhost:2000/todo").then((response) =>
      this.setState({ todoList: response.data })
    );
  };

  deleteTodo = (id) => {
    Axios.delete(`http://localhost:2000/todo/${id}`).then(() => {
      this.fetchTodo();
    });
  };

  addTodo = () => {
    Axios.post("http://localhost:2000/todo", {
      activity: this.state.inputTodo,
      isFinished: false,
    }).then(() => {
      this.fetchTodo();
    });
  };

  completeTodo = (id) => {
    Axios.patch(`http://localhost:2000/todo/${id}`, { isFinished: true }).then(
      () => {
        alert(`Task ${id} is Completed!`);
        this.fetchTodo();
      }
    );
  };

  renderTodoList = () => {
    return this.state.todoList.map((val) => {
      return (
        <TodoItem
          completeTodoHandler={this.completeTodo}
          deleteTodoHandler={this.deleteTodo}
          todoData={val}
        />
      );
    });
  };

  inputHandler = (event) => {
    this.setState({ inputTodo: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <button onClick={this.fetchTodo} className="btn btn-primary">
          Get My To Do List
        </button>
        {this.renderTodoList()}
        <div>
          <input onChange={this.inputHandler} type="text" className="mx-3" />
          <button onClick={this.addTodo} className="btn btn-primary">
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <h1>Todo List</h1>
//       <TodoItem toDoData={{ activity: "Makan", id: 1 }} />
//       <TodoItem toDoData={{ activity: "Tidur", id: 2 }} />
//       <TodoItem toDoData={{ activity: "Coding", id: 3 }} />
//     </div>
//   );
// }

export default App;
