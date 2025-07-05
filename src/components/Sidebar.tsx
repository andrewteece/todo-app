import AddTodoForm from './AddTodoForm';

export default function Sidebar() {
  return (
    <section className='col-[2/3] row-[2/3] bg-[hsl(30,100%,99%)] border-l border-black/[0.08] px-[1rem]'>
      <AddTodoForm />
    </section>
  );
}
