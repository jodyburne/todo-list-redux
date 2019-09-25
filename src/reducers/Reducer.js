import {
  ADD_NEW,
  SHOW_LIST,
  DEL_TODO,
  TODO_DONE,
  EDIT_TODO,
  UPDATE_TODO,
  FILTER
} from '../actionTypes/actionTypes';

let idCount = 2;
const initState = {
  todos: [
    { id: 1, task: 'Go to the gym', accomplished: false, edit: false },
    { id: 2, task: 'Cook dinner', accomplished: false, edit: false }
  ]
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_NEW:
      idCount++;
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: idCount, task: action.task, accomplished: false, edit: false }
        ]
      };
    case SHOW_LIST:
      return state;

    case DEL_TODO:
      return {
        state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };

    case TODO_DONE:
      return {
        state,
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? { id: action.id, accomplished: !todo.accomplished, task: todo.task, edit: todo.edit }
            : todo
        )
      };
    case EDIT_TODO:
      return {
        state,
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? { id: action.id, accomplished: todo.accomplished, task: todo.task, edit: action.edit }
            : todo
        )
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? {
                id: action.id,
                accomplished: todo.accomplished,
                task: action.task,
                edit: action.edit
              }
            : todo
        )
      };
    case FILTER:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.accomplished === false)
      };
    default:
      return state;
  }
};
export default todoReducer;
