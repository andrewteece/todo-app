const initialTodos = ['buy groceries', 'feed the cat', 'call plumber'];

export default function TodoList() {
  return (
    <ul>
      {initialTodos.map((todo) => (
        <li
          key={todo}
          className='flex justify-between items-center px-8 h-[3.125rem] text-[1rem] cursor-pointer
          border-b border-black/[0.08]'
        >
          <span>{todo}</span>
          <button>❌</button>
        </li>
      ))}
    </ul>
  );
}
