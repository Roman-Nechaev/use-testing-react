import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import TodoList from './components/TodoList';
import initialTodos from './todos.json';
import TodoEditor from './components/TodoEditor';
import TodoFilter from './components/TodoFilter';

// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';

// import Form from './components/Form.jsx';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    // todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return { ...todo, completed: !todo.completed };
    //     }
    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    return this.state.todos.filter(todo =>
      todo.text.toLocaleLowerCase().includes(normalizedFilter)
    );
  };
  calculatecompletedTodoCount = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  // formSubmitHandler = data => {
  //   console.log(data);
  // };

  render() {
    const { todos } = this.state;
    const totaTodoCount = todos.length;
    const completedTodoCount = this.calculatecompletedTodoCount();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <div>
          <p>Общее кол-во: {totaTodoCount} </p>
          <p>Кол-во выполненный: {completedTodoCount} </p>
        </div>

        <TodoEditor onSubmit={this.addTodo} />

        <TodoFilter value={this.filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}
export default App;
