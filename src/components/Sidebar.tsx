import AddTodoForm from './AddTodoForm';
import Button from './Button';

export default function Sidebar() {
  return (
    <section
      className='col-[2/3] row-[2/3] bg-[hsl(30,100%,99%)] border-l border-black/[0.08] px-2
        flex flex-col justify-between pt-2 pb-4
    '
    >
      <AddTodoForm />

      <div className='mt-auto space-y-2'>
        <Button buttonType='secondary'>Log In</Button>
        <Button buttonType='secondary'>Register</Button>
      </div>
    </section>
  );
}
