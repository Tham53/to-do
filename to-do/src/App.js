import React, { Component } from 'react';
import NewTodoForm from './TodoForm';
import TodoList from './ToDoList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    //header
    this.state = {
      message: 'Tommys todos',
      newTodo: '',

      //sample todos
      todos: [{
        title: 'Submit homework',
        done: false
      }, {
        title: 'Profit',
        done: false
      }]
    };
  }

  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  formSubmitted(event) {
    event.preventDefault();

    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  }

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos];
    todos[index] = {
      ...todos[index],
      done: event.target.checked
    };
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        done: true
      };
    });

    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <NewTodoForm
            newTodo={this.state.newTodo}
            formSubmitted={this.formSubmitted.bind(this)}
            newTodoChanged={this.newTodoChanged.bind(this)} />
        <button onClick={() => this.allDone()}>Enter</button>
        <TodoList
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}/>
      </div>
    );
  }
}
export default App;