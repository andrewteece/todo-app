import { useState } from 'react';
import { AddToDoProps } from '@types';

function AddToDo({ todos, setTodos }: AddToDoProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const handleAddTask = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) {
      alert('Please enter a valid task');
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      task: trimmed,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  return (
    <div className='flex bg-gray-200 rounded-full px-4 mb-6'>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Enter a new task'
        className='flex-1 border-none outline-none bg-transparent py-4 text-lg text-black'
      />
      <button
        onClick={handleAddTask}
        className='px-6 py-3 bg-blue-500 text-white text-base rounded-full hover:bg-blue-700 transition-all duration-300'
      >
        Add Task
      </button>
    </div>
  );
}

export default AddToDo;
