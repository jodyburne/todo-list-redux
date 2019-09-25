import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { DEL_TODO, TODO_DONE, EDIT_TODO } from '../actionTypes/actionTypes';
import EditToDo from './EditToDo';

function ToDos(props) {
  const [state, setState] = useState({
    completedChecked: false,
    alpha: false,
    reverse: false
  });

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.checked
    });
  };

  const filterCompleted = todo => {
    return state.completedChecked ? !todo.accomplished : todo;
  };

  const toggleSort = () => {
    if (!state.alpha && !state.reverse) {
      setState({ ...state, alpha: true });
    } else if (state.alpha && !state.reverse) {
      setState({ ...state, alpha: false, reverse: true });
    } else if (!state.alpha && state.reverse) {
      setState({ ...state, reverse: false });
    }
  };

  const handleSort = (a, b) => {
    if (state.alpha) return a.task < b.task ? -1 : 1;
    if (state.reverse) return a.task < b.task ? 1 : -1;
    return a.id > b.id ? 1 : -1;
  };

  return (
    <div className="main">
      {!state.alpha && !state.reverse && (
        <button className="borderless-btn" type="button" onClick={toggleSort}>
          {' '}
          Alphabetical
        </button>
      )}
      {state.alpha && (
        <button className="borderless-btn" type="button" onClick={toggleSort}>
          {' '}
          Reverse alphabetical
        </button>
      )}
      {state.reverse && (
        <button type="button" className="borderless-btn" onClick={toggleSort}>
          {' '}
          Creation order
        </button>
      )}

      <Table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {props.todos

            .filter(todo => filterCompleted(todo))
            .sort((a, b) => handleSort(a, b))
            .map(item =>
              !item.edit ? (
                <tr key={item.id}>
                  <td>
                    <input
                      type="radio"
                      name={item.id}
                      onClick={props.handleChecked}
                      checked={item.accomplished}
                    />
                  </td>
                  <td
                    style={{
                      textDecoration: item.accomplished && 'line-through',
                      color: item.accomplished && '#5cb85c'
                    }}
                  >
                    {item.task}
                  </td>
                  <td>
                    {' '}
                    <button
                      className="borderless-btn"
                      onClick={props.handleDelete}
                      type="button"
                      name={item.id}
                    >
                      delete
                    </button>
                    <button
                      className="borderless-btn"
                      onClick={props.handleEdit}
                      type="button"
                      name={item.id}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={item.id}>
                  <td>
                    <EditToDo name={item.id} former={item.task} />
                  </td>
                </tr>
              )
            )}
        </tbody>
      </Table>
      <span>Hide completed</span>
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDos);
