import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import TodoItem from "./components/todoitem";
// import TodoItem from "./components/todoitemsF";

class App extends React.Component {
  state = {
    todoList: [
      { activity: "Makan", id: 1 },
      { activity: "Mandi", id: 2 },
      { activity: "Main", id: 3 },
    ],
    inputTodo: "",
  };

  deleteTodo = (id) => {
    this.setState({
      todoList: this.state.todoList.filter((val) => {
        return val.id !== id;
      }),
    });
  };

  renderTodoList = () => {
    return this.state.todoList.map((val) => {
      return <TodoItem deleteTodoHandler={this.deleteTodo} todoData={val} />;
    });
  };

  addTodo = () => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        { activity: this.state.inputTodo, id: this.state.todoList.length + 1 },
      ],
    });
  };

  inputHandler = (event) => {
    this.setState({ inputTodo: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
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
