import BackgroundHeading from './components/BackgroundHeading';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='font-sans bg-[hsl(32,69%,82%)] min-h-screen flex justify-center items-center flex-col'>
      <BackgroundHeading />

      <main className='relative w-[60.75rem] shadow-[0_4px_4px_rgb(0,0,0,0.08)] h-[39.75rem] bg-[#fff] rounded-[.5rem] overflow-hidden grid grid-cols-[7fr_4fr] grid-rows-[3.6875rem_1fr]'>
        <Header />
        <TodoList />

        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
