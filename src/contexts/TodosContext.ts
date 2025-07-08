import { createContext, useContext } from 'react';
import type { TodosContextType } from '../lib/types';

// Typed context with fallback
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
