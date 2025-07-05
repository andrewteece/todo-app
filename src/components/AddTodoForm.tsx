export default function AddTodoForm() {
  return (
    <form>
      <h2 className='text-[hsl(34,25%,11%)] text-[1rem] font-semibold'>
        Add a todo
      </h2>
      <input
        type='text'
        className='h-[2.8125rem] w-full border-[.125rem] border-[rgba(0,0,0,0.12)] rounded-[.375rem] ml-[0] px-[1rem] py-[0] text-[.875rem]'
      />
      <button
        type='submit'
        className='h-[2.8125rem] w-full border-[none] rounded-[5px] bg-[hsl(32,25%,22%)] text-[#fff] text-[1rem] cursor-pointer flex justify-center items-center [transition:all_0.2s] hover:bg-[hsl(32,35%,15%)] mt-2'
      >
        Add to list
      </button>
    </form>
  );
}
