import React from 'react';
import ToDos from './ToDos';
import NewToDo from './NewToDo';

function App() {
  return (
    <div className="App" style={{ marginTop: 30 }}>
      <div>
        <h1>To Dos:</h1>
        <br />
      </div>
      <div>
        <div>
          <h4>Add another</h4>
          <br />
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
