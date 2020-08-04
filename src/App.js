import React from 'react';
import './App.css';
import TodoFormContainer from './containers/todoFormContainer';
import TodoListContainer from './containers/todoListContainer';
import UndoneListContainer from './containers/undoneListContainer'
import DoneListContainer from './containers/doneListContainer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul className="navigation">
            <li>
              <Link to="/">  TODOLIST      </Link>
            </li>
            <li>
              <Link to="/done">   DONELIST </Link>
            </li>
            <li>
              <Link to="/undone">  UNDONELIST </Link>
            </li>
          </ul>
          <TodoFormContainer />
          <Route path="/" exact component={TodoListContainer} />  
          <Route path="/done" exact component={DoneListContainer} />  
          <Route path="/undone" exact component={UndoneListContainer} />  
        </header>
      </div>
    </Router>
  );
}

export default App;
