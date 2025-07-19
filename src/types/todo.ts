export interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

export interface ToDoProps {
  todo: Todo;
  toggleTodoCompletion: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
}

export interface AddToDoProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
