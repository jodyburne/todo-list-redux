import * as types from '../actionTypes/actionTypes';

export function addTodo(task) {
  return {
    type: types.ADD_NEW,
    task
  };
}

export function showList() {
  return {
    type: types.SHOW_LIST
  };
}

export function delTodo(id) {
  return {
    type: types.DEL_TODO,
    id
  };
}

export function completeTodo(id) {
  return {
    type: types.TODO_DONE,
    id
  };
}

export function editTodo(id) {
  return {
    type: types.EDIT_TODO,
    id
  };
}

export function updateTodo(todo) {
  return {
    type: types.UPDATE_TODO,
    todo
  };
}

export function filter() {
  return {
    type: types.FILTER
  };
}