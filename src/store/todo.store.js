import { writable, derived } from "svelte/store";
import { Todo } from "../models/todo.model";

// REDUCER
const todoStore = writable([
  new Todo(0, false, "Test 1", "Desc 1"),
  new Todo(1, false, "Test 2", "Desc 2"),
  new Todo(2, true, "Test 3", "Desc 3")
]);

// SELECTORS
const todosCount = derived(todoStore, $todoStore => $todoStore.length);

const todosCompleted = derived(
  todoStore,
  $todoStore => $todoStore.filter(todo => todo.isDone).length
);

function addTodo(todo) {
  return todoStore.update(todos => {
    const nextId = Math.max(...todos.map(t => t.id)) + 1;
    const { title, description, isChecked } = todo;
    const newTodo = new Todo(nextId, isChecked, title, description);
    return [newTodo, ...todos];
  });
}

function updateTodo(todo) {
  return todoStore.update(todos => {
    todos[getIndex(todo, todos)] = todo;
    return [...todos];
  });
}

function getIndex(item, array) {
  return array.map(i => i.id).indexOf(item.id);
}

export default {
  subscribe: todoStore.subscribe,
  getTotal: todosCount,
  getCompleted: todosCompleted,
  addTodo,
  updateTodo
};
