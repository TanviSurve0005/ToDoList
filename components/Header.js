import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 mb-10 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">To-Do App</Link>
        <nav className="space-x-4">
          <Link href="/" className="hover:text-gray-400">Activity</Link>
          <Link href="/completed" className="hover:text-gray-400">Completed</Link>
          <Link href="/contact" className="hover:text-gray-400">Priority</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
