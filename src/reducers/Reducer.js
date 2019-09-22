import { ADD_NEW, SHOW_LIST, DEL_TODO, TODO_DONE } from '.././actionTypes/actionTypes';

let idCount = 2;
const initState = {
  todos: [
    { id: 1, task: 'go gym', accomplished: false },
    { id: 2, task: 'cook', accomplished: false }
  ]
};

const addReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_NEW:
      idCount++;
      return {
        ...state,
        todos: [...state.todos, { id: idCount, task: action.task, accomplished: false }]
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
            ? { id: action.id, accomplished: action.accomplished, task: todo.task }
            : todo
        )
      };

    default:
      return state;
  }
};
export default addReducer;
