export default function Header() {
  return (
    <header className='col-[1/3] row-[1/2] bg-[hsl(34,64%,96%)] border-b border-black/[0.08] flex justify-between items-center px-[1.75rem] py-[0]'>
      <img
        src='https://bytegrad.com/course-assets/react-nextjs/dots.png'
        alt='todo app logo'
      />
      <p>
        <span className='font-bold'>0</span> / 0 todos completed
      </p>
    </header>
  );
}
