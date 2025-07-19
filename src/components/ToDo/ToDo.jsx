function ToDo({
  todo,
  toggleTodoCompletion,
  handleDeleteTodo,
}: {
  todo: { id: string, task: string, completed: boolean },
  toggleTodoCompletion: (id: string) => void,
  handleDeleteTodo: (id: string) => void,
}) {
  const { completed, task, id } = todo;

  return (
    <div
      className={`flex items-center px-2 py-2 my-1 border-b cursor-pointer ${
        completed ? 'bg-gray-100' : 'hover:bg-gray-200'
      }`}
    >
      <input
        type='checkbox'
        checked={completed}
        onChange={() => toggleTodoCompletion(id)}
        className='w-5 h-5'
      />
      <div
        onClick={() => toggleTodoCompletion(id)}
        className={`flex-1 ml-4 text-left text-xl ${
          completed ? 'line-through text-gray-500' : ''
        }`}
      >
        {task}
      </div>
      <button
        onClick={() => handleDeleteTodo(id)}
        className='bg-red-500 text-white border-none px-4 py-2 rounded text-lg hover:bg-red-700'
      >
        x
      </button>
    </div>
  );
}
