import { useEffect, useState } from 'react';
import AddToDo from './AddToDo';
import ToDo from './ToDo';
import { Todo } from '../../types/todo';
import { loadFromStorage, saveToStorage } from '../utils/storage';

function ToDoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = loadFromStorage<Todo[]>('todos');
    if (stored) setTodos(stored);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    saveToStorage('todos', todos);
  }, [todos, loaded]);

  const handleDeleteTodo = (deleteId: string) => {
    setTodos(todos.filter((todo) => todo.id !== deleteId));
  };

  const toggleTodoCompletion = (todoId: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>To Do List</h2>
      <AddToDo todos={todos} setTodos={setTodos} />
      <div>
        {todos.map((todo) => (
          <ToDo
            key={todo.id}
            todo={todo}
            toggleTodoCompletion={toggleTodoCompletion}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
