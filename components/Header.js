import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 my-10 max-w-full">
      <div className="container mx-auto flex justify-center items-center ">
        <Link href="/" className="text-2xl font-bold text-center">To-Do App</Link>
      </div>
    </header>
  );
};

export default Header;
