import React, { useState } from 'react';
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { ADD_NEW } from '../actionTypes/actionTypes';

function NewToDo(props) {
  const [taskState, setTaskState] = useState('');

  const handleChange = e => {
    setTaskState(e.target.value);
  };

  return (
    <div className="main">
      <form onSubmit={props.handleSubmit}>
        <InputGroup>
          <Input
            type="text"
            name="task"
            value={taskState}
            onChange={handleChange}
            placeholder="Add new todo here..."
          />
          <InputGroupAddon addonType="append">
            <Button name="addToDo" type="submit" color="success">
              Submit!
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </form>
      <br />
    </div>
  );
}

const mapStateToProps = state => {
  return {};
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
