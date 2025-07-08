import { useContext } from 'react';
import { TodosContext } from '../contexts/TodosContextProvider';
export function useTodosContext() {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error(
      'useTodosContext must be used with a TodosContextProvider component'
    );
  }

  return context;
}
