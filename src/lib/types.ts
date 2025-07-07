export type Todo = {
  id: number;
  content: string;
  completed: boolean;
};

export type TodosContextType = {
  todos: Todo[];
  isLoading: boolean;
  totalCount: number;
  completedCount: number;
  addTodo: (content: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};
