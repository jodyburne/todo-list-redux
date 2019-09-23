import React, { useState } from 'react';
import { connect } from 'react-redux';
import { UPDATE_TODO } from './actionTypes/actionTypes';

function EditToDo(props) {
  const [taskState, setTaskState] = useState(props.former);

  const handleChange = e => {
    setTaskState(e.target.value);
  };

  return (
    <div>
      <form onSubmit={props.handleUpdate} name={props.name}>
        <input type="text" name="task" value={taskState} onChange={handleChange} placeholder={props.former}/>
        <button name="addToDo" type="submit">
          update
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
    handleUpdate: e => {
      e.preventDefault();
      dispatch({
        type: UPDATE_TODO,
        id: Number(e.target.name),
        task: e.target.task.value,
        edit: false
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditToDo);
