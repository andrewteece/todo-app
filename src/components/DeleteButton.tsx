export default function DeleteButton({ id, setTodos }) {
  return (
    <button
      onClick={() => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
      }}
    >
      ❌
    </button>
  );
}
