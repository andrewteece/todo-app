import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from 'react';
import { Todo, TodosContextType } from '../lib/types';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

export const TodosContext = createContext<TodosContextType | undefined>(
  undefined
);

export function useTodosContext() {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error(
      'useTodosContext must be used within a TodosContextProvider'
    );
  }
  return context;
}

export default function TodosContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { isAuthenticated } = useKindeAuth();

  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  const addTodo = (content: string) => {
    if (todos.length >= 3 && !isAuthenticated) {
      alert('To add more todos, please log in.');
      return;
    }

    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        content,
        completed: false,
      },
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);

      const response = await fetch(
        'https://bytegrad.com/course-assets/api/todos'
      );
      const todos = await response.json();
      setTodos(todos);

      setIsLoading(false);
    };

    fetchTodos();
  }, []);

  return (
    <TodosContext.Provider
      value={{
        todos,
        isLoading,
        totalCount,
        completedCount,
        addTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
