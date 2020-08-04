import React from 'react';
import './App.css';
import TodoFormContainer from './containers/todoFormContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoFormContainer />
      </header>
    </div>
  );
}

export default App;
