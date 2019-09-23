import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DEL_TODO, TODO_DONE, EDIT_TODO, FILTER } from './actionTypes/actionTypes';
import EditToDo from './EditToDo';

function ToDos(props) {
  const [state, setState] = useState({
    completedChecked: false,
    sortedChecked: false
  });

  const handleChange = e => {
    console.log(e.target.checked);
    setState({
      ...state,
      [e.target.name]: e.target.checked
    });
  };

  const filterCompleted = todo => {
    return state.completedChecked ? todo.accomplished === false : todo;
  };

  return (
    <div>
      <li>
        {props.todos

          .filter(todo => filterCompleted(todo))
          .map(item =>
            !item.edit ? (
              <ul
                key={item.id}
                style={{
                  textDecoration: item.accomplished && 'line-through'
                }}
              >
                {item.task}

                <input type="checkbox" name={item.id} onClick={props.handleChecked}></input>

                <button onClick={props.handleDelete} name={item.id}>
                  delete
                </button>
                <button onClick={props.handleEdit} name={item.id}>
                  Edit
                </button>
              </ul>
            ) : (
              <EditToDo name={item.id} former={item.task} />
            )
          )}
      </li>
      <label>Hide completed</label>
      <input
        checked={state.completedChecked}
        name="completedChecked"
        onChange={handleChange}
        type="checkbox"
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleEdit: e => {
      dispatch({ type: EDIT_TODO, id: Number(e.target.name), edit: true });
    },

    handleChecked: e => {
      dispatch({ type: TODO_DONE, id: Number(e.target.name) });
    },
    handleDelete: e => {
      dispatch({ type: DEL_TODO, id: Number(e.target.name) });
    }
    //   handleFilter: e => {
    //     let filter
    //     dispatch({ type: FILTER });
    //   }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDos);
