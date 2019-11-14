import { readable, derived } from "svelte/store";

// REDUCER
const todoStore = readable([
  {
    id: 0,
    isDone: false,
    title: "Test 1",
    description: "Desc 1"
  },
  {
    id: 1,
    isDone: false,
    title: "Test 2",
    description: "Desc 2"
  },
  {
    id: 2,
    isDone: true,
    title: "Test 3",
    description: "Desc 3"
  }
]);

// SELECTORS
const todosCount = derived(todoStore, $todoStore => $todoStore.length);

const todosCompleted = derived(todoStore, $todoStore =>
  $todoStore.filter(todo => todo.isDone)
);

export default {
  subscribe: todoStore.subscribe,
  addTodo: todo => todoStore.update(todos => [...todos, todo]),
  getTotal: todosCount,
  getCompleted: todosCompleted
};
