import React from 'react';
import './App.css';
import TodoFormContainer from './containers/todoFormContainer';
import TodoListContainer from './containers/todoListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoFormContainer />
        <TodoListContainer />
        
      </header>
    </div>
  );
}

export default App;
