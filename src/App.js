// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';

// import initialTodos from './todos.json';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

import React, { Component } from 'react';

import TodoList from './components/TodoList';
import initialTodos from './todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totaTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <>
        {/* <h1>Состояние компонента</h1> */}

        <div>
          <p>Общее кол-во: {totaTodoCount} </p>
          <p>Кол-во выполненный: {completedTodoCount} </p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />

        {/* <Counter initialValue={10} /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
      </>
    );
  }
}
export default App;
