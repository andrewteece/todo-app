function AddToDo({
  todos,
  setTodos,
}: {
  todos: any[];
  setTodos: (todos: any[]) => void;
}) {
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (!inputValue) {
      alert('Please enter a valid task');
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      task: inputValue,
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
