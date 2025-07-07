import { useTodosContext } from '../lib/hooks';

interface DeleteButtonProps {
  id: number;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  const { deleteTodo } = useTodosContext();

  return (
    <button
      type='button'
      aria-label='Delete todo'
      className='text-red-500 hover:text-red-700 transition'
      onClick={(e) => {
        e.stopPropagation();
        deleteTodo(id);
      }}
    >
      ❌
    </button>
  );
}
