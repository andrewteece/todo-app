import { useState } from 'react';
import { useTodosContext } from '../lib/hooks';
import Button from './Button';

export default function AddTodoForm() {
  const [todoContent, setTodoContent] = useState('');
  const { addTodo } = useTodosContext();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(todoContent);
        setTodoContent('');
      }}
    >
      <h2 className='text-[hsl(34,25%,11%)] text-[1rem] font-semibold font-primary'>
        Add a todo
      </h2>
      <input
        type='text'
        className='h-[2.8125rem] w-full border-[.125rem] border-[rgba(0,0,0,0.12)] rounded-[.375rem] ml-[0] mr-[0] my-2 px-2 py-[0] text-[.875rem]'
        value={todoContent}
        onChange={(e) => {
          setTodoContent(e.target.value);
        }}
      />
      <Button>Add to list</Button>
    </form>
  );
}
