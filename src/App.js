import React from 'react';
import ToDos from './ToDos.jsx';
import NewToDo from './NewToDo.jsx';

function App() {
  return (
    <div className="App">
      <h1>To Dos:</h1>
      <div>
        <div>
          <h2>Add</h2>
          <NewToDo />
        </div>
        <div>
          <ToDos />
        </div>
      </div>
    </div>
  );
}

export default App;
