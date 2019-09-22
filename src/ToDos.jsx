import React from 'react';
import { connect } from 'react-redux';
import { DEL_TODO, TODO_DONE } from './actionTypes/actionTypes';

function ToDos(props) {
  return (
    <div>
      <li>
        {props.todos.map(item => (
          <ul
            key={item.id}
            style={{
              textDecoration: item.accomplished && 'line-through'
            }}
          >
            {item.task}
            {!item.accomplished && 
            <input type="checkbox" name={item.id} onClick={props.handleChecked}></input>
            }
            <button onClick={props.handleDelete} name={item.id}>
              delete
            </button>
          </ul>
        ))}
      </li>
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
    handleChecked: e => {
      dispatch({ type: TODO_DONE, id: Number(e.target.name), accomplished: true });
    },
    handleDelete: e => {
      dispatch({ type: DEL_TODO, id: Number(e.target.name) });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDos);
