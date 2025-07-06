import DeleteButton from './DeleteButton';

const initialTodos = [
  {
    text: 'buy groceries',
    isCompleted: false,
  },
  {
    text: 'feed the cat',
    isCompleted: true,
  },
  {
    text: 'call plumber',
    isCompleted: true,
  },
];

export default function TodoList() {
  return (
    <ul>
      {initialTodos.map((todo) => (
        <li
          key={todo}
          className='flex justify-between items-center px-8 h-[3.125rem] text-[1rem] cursor-pointer
          border-b border-black/[0.08]'
        >
          <span className={'line-through text-[hsl(0,0%,80%)]'}>
            {todo.text}
          </span>
          <button>❌</button>
        </li>
      ))}
    </ul>
  );
}
