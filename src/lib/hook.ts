import { useContext } from 'react';

export function useTodosContext() {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error(
      'TodosContet must be used with a TodosContextProvider component'
    );
  }

  return context;
}
