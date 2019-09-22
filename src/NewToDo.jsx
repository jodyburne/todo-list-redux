import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ADD_NEW } from './actionTypes/actionTypes';

function NewToDo(props) {
  const [taskState, setTaskState] = useState('');

  const handleChange = e => {
    setTaskState(e.target.value);
  };

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type="text" name="task" value={taskState} onChange={handleChange} />
        <button name="addToDo" type="submit">
          add new
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    // todos: state.addReducer.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: e => {
      e.preventDefault();
      dispatch({ type: ADD_NEW, task: e.target.task.value });
      e.target.task.value = '';
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewToDo);
