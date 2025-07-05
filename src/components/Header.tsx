import Counter from './Counter';
import Logo from './Logo';

export default function Header() {
  return (
    <header className='col-[1/3] row-[1/2] bg-[hsl(34,64%,96%)] border-b border-black/[0.08] flex justify-between items-center px-[1.75rem] py-[0]'>
      <Logo />

      <Counter />
    </header>
  );
}
