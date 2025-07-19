import { useEffect, useState } from 'react';
import AddToDo from '@components/AddToDo';
import ToDo from '@components/ToDo';
import { Todo } from '@types';
import { loadFromStorage, saveToStorage } from '@utils/storage';

function ToDoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

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

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className='max-w-xl mx-auto px-4 py-10 space-y-6 text-neutral-800 dark:text-neutral-100'>
      <h2 className='text-4xl font-bold text-center'>My Tasks</h2>

      {/* Filter Buttons */}
      <div className='flex justify-center gap-4 mb-6'>
        {(['all', 'active', 'completed'] as const).map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded ${
              filter === type ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <AddToDo todos={todos} setTodos={setTodos} />

      <div className='space-y-2'>
        {filteredTodos.map((todo) => (
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
