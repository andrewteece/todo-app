import Button from './Button';

export default function AddTodoForm() {
  return (
    <form>
      <h2 className='text-[hsl(34,25%,11%)] text-[1rem] font-semibold'>
        Add a todo
      </h2>
      <input
        type='text'
        className='h-[2.8125rem] w-full border-[.125rem] border-[rgba(0,0,0,0.12)] rounded-[.375rem] ml-[0] mr-[0] my-2 px-2 py-[0] text-[.875rem]'
      />
      <Button>Add to list</Button>
    </form>
  );
}
